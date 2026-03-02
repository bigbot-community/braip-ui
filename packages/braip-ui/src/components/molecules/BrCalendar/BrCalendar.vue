<script setup lang="ts">
import { computed, ref } from "vue";
import type { CalendarProps, CalendarView, CalendarRange } from "./types";

const props = withDefaults(defineProps<CalendarProps>(), {
  view: "day",
  firstDayOfWeek: 0,
  showWeekNumbers: false,
  multiple: false,
  range: false,
  locale: "pt-BR",
  readonly: false,
  disabled: false,
});

const model = defineModel<Date | Date[] | CalendarRange | null>();

const currentView = ref<CalendarView>(props.view);
const viewDate = ref(new Date());

const weekDays = computed(() => {
  const days = [];
  const baseDate = new Date(2024, 0, props.firstDayOfWeek);
  for (let i = 0; i < 7; i++) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i);
    days.push(date.toLocaleDateString(props.locale, { weekday: "short" }));
  }
  return days;
});

const monthName = computed(() => {
  return viewDate.value.toLocaleDateString(props.locale, {
    month: "long",
    year: "numeric",
  });
});

const calendarDays = computed(() => {
  const year = viewDate.value.getFullYear();
  const month = viewDate.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];
  const startOffset = (firstDay.getDay() - props.firstDayOfWeek + 7) % 7;

  // Previous month days
  for (let i = startOffset - 1; i >= 0; i--) {
    const date = new Date(year, month, -i);
    days.push({ date, isCurrentMonth: false, isToday: false });
  }

  // Current month days
  const today = new Date();
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
    days.push({ date, isCurrentMonth: true, isToday });
  }

  // Next month days
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const date = new Date(year, month + 1, i);
    days.push({ date, isCurrentMonth: false, isToday: false });
  }

  return days;
});

const months = computed(() => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(viewDate.value.getFullYear(), i, 1);
    months.push({
      index: i,
      name: date.toLocaleDateString(props.locale, { month: "short" }),
    });
  }
  return months;
});

const years = computed(() => {
  const currentYear = viewDate.value.getFullYear();
  const startYear = Math.floor(currentYear / 10) * 10;
  const years = [];
  for (let i = startYear - 1; i <= startYear + 10; i++) {
    years.push(i);
  }
  return years;
});

function isDateDisabled(date: Date) {
  if (props.disabled) return true;

  if (props.minDate) {
    const min = new Date(props.minDate);
    min.setHours(0, 0, 0, 0);
    if (date < min) return true;
  }

  if (props.maxDate) {
    const max = new Date(props.maxDate);
    max.setHours(23, 59, 59, 999);
    if (date > max) return true;
  }

  if (props.disabledDates) {
    return props.disabledDates.some((d) => {
      const disabled = new Date(d);
      return (
        date.getDate() === disabled.getDate() &&
        date.getMonth() === disabled.getMonth() &&
        date.getFullYear() === disabled.getFullYear()
      );
    });
  }

  return false;
}

function isDateSelected(date: Date) {
  if (!model.value) return false;

  if (
    props.range &&
    typeof model.value === "object" &&
    "start" in model.value
  ) {
    const range = model.value as CalendarRange;
    if (range.start && isSameDay(date, range.start)) return true;
    if (range.end && isSameDay(date, range.end)) return true;
    return false;
  }

  if (props.multiple && Array.isArray(model.value)) {
    return model.value.some((d) => isSameDay(date, d));
  }

  if (model.value instanceof Date) {
    return isSameDay(date, model.value);
  }

  return false;
}

function isInRange(date: Date) {
  if (
    !props.range ||
    !model.value ||
    typeof model.value !== "object" ||
    !("start" in model.value)
  )
    return false;

  const range = model.value as CalendarRange;
  if (!range.start || !range.end) return false;

  return date > range.start && date < range.end;
}

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function getHighlight(date: Date) {
  if (!props.highlightedDates) return null;
  return props.highlightedDates.find((h) => isSameDay(date, new Date(h.date)));
}

function selectDate(date: Date) {
  if (props.readonly || props.disabled || isDateDisabled(date)) return;

  if (props.range) {
    const current = (model.value as CalendarRange) || {
      start: null,
      end: null,
    };
    if (!current.start || current.end) {
      model.value = { start: date, end: null };
    } else {
      if (date < current.start) {
        model.value = { start: date, end: current.start };
      } else {
        model.value = { start: current.start, end: date };
      }
    }
  } else if (props.multiple) {
    const current = (model.value as Date[]) || [];
    const index = current.findIndex((d) => isSameDay(d, date));
    if (index > -1) {
      const newValue = [...current];
      newValue.splice(index, 1);
      model.value = newValue;
    } else {
      model.value = [...current, date];
    }
  } else {
    model.value = date;
  }
}

function selectMonth(month: number) {
  viewDate.value = new Date(viewDate.value.getFullYear(), month, 1);
  currentView.value = "day";
}

function selectYear(year: number) {
  viewDate.value = new Date(year, viewDate.value.getMonth(), 1);
  currentView.value = "month";
}

function navigate(direction: number) {
  const date = new Date(viewDate.value);
  if (currentView.value === "day") {
    date.setMonth(date.getMonth() + direction);
  } else if (currentView.value === "month") {
    date.setFullYear(date.getFullYear() + direction);
  } else {
    date.setFullYear(date.getFullYear() + direction * 10);
  }
  viewDate.value = date;
}

function goToToday() {
  viewDate.value = new Date();
  currentView.value = "day";
}

const classes = computed(() => [
  "br-calendar",
  {
    "br-calendar--disabled": props.disabled,
    "br-calendar--readonly": props.readonly,
  },
]);
</script>

<template>
  <div :class="classes">
    <div class="br-calendar__header">
      <button
        type="button"
        class="br-calendar__nav"
        :disabled="disabled"
        @click="navigate(-1)"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        type="button"
        class="br-calendar__title"
        :disabled="disabled"
        @click="currentView = currentView === 'day' ? 'month' : 'year'"
      >
        {{ monthName }}
      </button>

      <button
        type="button"
        class="br-calendar__nav"
        :disabled="disabled"
        @click="navigate(1)"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>

    <!-- Day View -->
    <div v-if="currentView === 'day'" class="br-calendar__days">
      <div class="br-calendar__weekdays">
        <span v-if="showWeekNumbers" class="br-calendar__weekday">#</span>
        <span v-for="day in weekDays" :key="day" class="br-calendar__weekday">
          {{ day }}
        </span>
      </div>

      <div class="br-calendar__grid">
        <template v-for="(day, index) in calendarDays" :key="index">
          <span
            v-if="showWeekNumbers && index % 7 === 0"
            class="br-calendar__week-number"
          >
            {{ Math.ceil((index + 1) / 7) }}
          </span>
          <button
            type="button"
            class="br-calendar__day"
            :class="{
              'br-calendar__day--other-month': !day.isCurrentMonth,
              'br-calendar__day--today': day.isToday,
              'br-calendar__day--selected': isDateSelected(day.date),
              'br-calendar__day--in-range': isInRange(day.date),
              'br-calendar__day--disabled': isDateDisabled(day.date),
              'br-calendar__day--highlighted': getHighlight(day.date),
            }"
            :style="
              getHighlight(day.date)
                ? { '--highlight-color': getHighlight(day.date)?.color }
                : {}
            "
            :disabled="isDateDisabled(day.date)"
            :title="getHighlight(day.date)?.label"
            @click="selectDate(day.date)"
          >
            {{ day.date.getDate() }}
          </button>
        </template>
      </div>
    </div>

    <!-- Month View -->
    <div v-else-if="currentView === 'month'" class="br-calendar__months">
      <button
        v-for="month in months"
        :key="month.index"
        type="button"
        class="br-calendar__month"
        :class="{
          'br-calendar__month--current':
            month.index === new Date().getMonth() &&
            viewDate.getFullYear() === new Date().getFullYear(),
        }"
        :disabled="disabled"
        @click="selectMonth(month.index)"
      >
        {{ month.name }}
      </button>
    </div>

    <!-- Year View -->
    <div v-else class="br-calendar__years">
      <button
        v-for="year in years"
        :key="year"
        type="button"
        class="br-calendar__year"
        :class="{
          'br-calendar__year--current': year === new Date().getFullYear(),
        }"
        :disabled="disabled"
        @click="selectYear(year)"
      >
        {{ year }}
      </button>
    </div>

    <div class="br-calendar__footer">
      <button
        type="button"
        class="br-calendar__today"
        :disabled="disabled"
        @click="goToToday"
      >
        Hoje
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-calendar {
  display: inline-flex;
  flex-direction: column;
  padding: var(--br-space-3);
  background: var(--br-white);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  min-width: 280px;

  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--br-space-3);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    color: var(--neutralDarkGrey6);
    cursor: pointer;
    transition: background var(--br-transition-fast);

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover:not(:disabled) {
      background: var(--neutralLightGrey7);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__title {
    flex: 1;
    padding: var(--br-space-2);
    border: none;
    background: transparent;
    font-size: var(--br-text-md);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey7);
    cursor: pointer;
    text-transform: capitalize;

    &:hover:not(:disabled) {
      background: var(--neutralLightGrey7);
      border-radius: var(--br-radius-md);
    }
  }

  &__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: var(--br-space-2);
  }

  &__weekday {
    text-align: center;
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-medium);
    color: var(--neutralDarkGrey5);
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  &__week-number {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey4);
  }

  &__day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey7);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover:not(:disabled):not(&--selected) {
      background: var(--neutralLightGrey7);
    }

    &--other-month {
      color: var(--neutralDarkGrey3);
    }

    &--today {
      font-weight: var(--br-font-bold);
      color: var(--brandPrimary6);
    }

    &--selected {
      background: var(--brandPrimary5);
      color: var(--br-white);
    }

    &--in-range {
      background: var(--brandPrimaryLightest);
      border-radius: 0;
    }

    &--disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &--highlighted {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--highlight-color, var(--brandPrimary5));
      }
    }
  }

  &__months,
  &__years {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--br-space-2);
  }

  &__month,
  &__year {
    padding: var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey7);
    cursor: pointer;
    text-transform: capitalize;
    transition: background var(--br-transition-fast);

    &:hover:not(:disabled) {
      background: var(--neutralLightGrey7);
    }

    &--current {
      color: var(--brandPrimary6);
      font-weight: var(--br-font-semibold);
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: var(--br-space-3);
    padding-top: var(--br-space-3);
    border-top: 1px solid var(--neutralLightGrey6);
  }

  &__today {
    padding: var(--br-space-2) var(--br-space-4);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-sm);
    color: var(--brandPrimary6);
    cursor: pointer;

    &:hover:not(:disabled) {
      background: var(--brandPrimaryLightest);
    }
  }
}
</style>

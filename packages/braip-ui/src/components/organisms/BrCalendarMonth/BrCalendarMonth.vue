<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import dayjs from "dayjs";
import type { BrCalendarMonthProps, CalendarDay } from "./types";
export default defineComponent({
  name: "BrCalendarMonth",
  props: {
    bgHeader: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    bgCalendar: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    colorCalendar: {
      type: String,
      default: "var(--neutralLightGrey5)",
    },
    borderColorCalendar: {
      type: String,
      default: "var(--neutralLightGrey6)",
    },
    bgNotCurrentMonth: {
      type: String,
      default: "var(--neutralLightGrey5)",
    },
    bgItem: {
      type: String,
      default:
        "linear-gradient( 90deg,rgb(201, 178, 255) 50%,rgb(158, 125, 255) 100%,rgb(44, 24, 100) 0%)",
    },
    fontSizeItem: {
      type: String,
      default: "var(--br-text-base)",
    },
    colorItem: {
      type: String,
      default: "var(--brandPrimaryLightest)",
    },
    dateSelectorColorRoot: {
      type: String,
      default: "var(--neutralLightGrey1)",
    },
    dateSelectorColorIndicator: {
      type: String,
      default: "var(--neutralDarkGrey1)",
    },
    dateSelectorColorIcon: {
      type: String,
      default: "var(--neutralLightGrey1)",
    },
    dateSelectorFontSize: {
      type: String,
      default: "var(--fontSizeTextP2)",
    },
    dateSelectorFontSizeMobile: {
      type: String,
      default: "var(--fontSizeTextP3)",
    },
    dateSelectorFontWeight: {
      type: String,
      default: "500",
    },
    bgFilter: {
      type: String,
      default: "var(--brandPrimaryLightest)",
    },
    fontSizeFilter: {
      type: String,
      default: "var(--br-text-base)",
    },
    fontWeightFilter: {
      type: String,
      default: "var(--br-font-medium)",
    },
    bgActiveFilter: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    initialIsDay: {
      type: Boolean,
      default: false,
    },
    initialIsWeek: {
      type: Boolean,
      default: true,
    },
    initialFilter: {
      type: String,
      default: "month",
    },
    items: {
      type: Array as () => string[],
      default: () => [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
        "Item 11",
      ],
    },
  },
  emits: ["item-click"],
  setup(props: BrCalendarMonthProps) {
    const isDay = ref(props.initialIsDay);
    const isWeek = ref(props.initialIsWeek);
    const days = ref<CalendarDay[]>([]);
    const today = ref(dayjs().format("YYYY-MM-DD"));
    const selectedDate = ref(dayjs());
    const year = ref(dayjs(today.value).year());
    const month = ref(dayjs(today.value).month() + 1);
    const isFilter = ref(props.initialFilter);
    const itemsList = ref<string[]>(props.items ?? []);
    const numberOfDaysInWeek = ref(dayjs(selectedDate.value).day(0));

    const label = (day: CalendarDay) => {
      if (!isWeek.value) {
        return dayjs(day.date).format("D");
      }
      return dayjs(day.date).format("DD.MM");
    };

    const getWeekday = (date: string) => {
      return dayjs(date).day();
    };

    const currentMonthDays = () => {
      const numberOfDaysInMonth = dayjs(
        `${year.value}-${month.value}-01`,
      ).daysInMonth();
      return [...Array(numberOfDaysInMonth)].map((_, index) => {
        return {
          date: dayjs(`${year.value}-${month.value}-${index + 1}`).format(
            "YYYY-MM-DD",
          ),
          isCurrentMonth: true,
        };
      });
    };

    const currentWeek = () => {
      const firstDayOfTheWeek = numberOfDaysInWeek.value.format("YYYY-MM-DD");
      return [...Array(7).fill(firstDayOfTheWeek)].map((day, index) => {
        return {
          date: dayjs(firstDayOfTheWeek).add(index, "day").format("YYYY-MM-DD"),
          isCurrentMonth: true,
        };
      });
    };

    const currentDay = () => {
      const interval = 4;
      const TimesOfDay = [] as string[];

      for (let hour = 0; hour < 24; hour += interval) {
        const hourStart = hour.toString().padStart(2, "0") + ":00";
        const hourEnd =
          ((hour + interval) % 24).toString().padStart(2, "0") + ":00";
        TimesOfDay.push(`${hourStart} - ${hourEnd}`);
      }

      return [...Array(6)].map((hour, index) => {
        return {
          date: TimesOfDay[index],
          isCurrentMonth: true,
        };
      });
    };

    const previousMonthDays = () => {
      const currentDays = currentMonthDays();
      const firstDayOfTheMonthWeekday = getWeekday(currentDays[0].date);
      const previousMonth = dayjs(`${year.value}-${month.value}-01`).subtract(
        1,
        "month",
      );

      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday;

      const previousMonthLastMondayDayOfMonth = dayjs(currentDays[0].date)
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (_, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() + 1}-${
                previousMonthLastMondayDayOfMonth + index
              }`,
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false,
          };
        },
      );
    };

    const nextMonthDays = () => {
      const currentDays = currentMonthDays();
      const lastDayOfTheMonthWeekday = getWeekday(
        currentDays[currentDays.length - 1].date,
      );
      const nextMonth = dayjs(`${year.value}-${month.value}-01`).add(
        1,
        "month",
      );

      const visibleNumberOfDaysFromNextMonth =
        lastDayOfTheMonthWeekday === 6 ? 0 : 6 - lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`,
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false,
        };
      });
    };

    const selectDate = (newSelectedDate: string) => {
      const nextSelectedDate = dayjs(newSelectedDate);
      selectedDate.value = nextSelectedDate;
      year.value = nextSelectedDate.year();
      month.value = nextSelectedDate.month() + 1;
      days.value = [
        ...previousMonthDays(),
        ...currentMonthDays(),
        ...nextMonthDays(),
      ];
    };

    const selectDateWeek = async (newSelectedDateWeek: string) => {
      selectedDate.value = dayjs(newSelectedDateWeek);
      isWeek.value = true;
      isDay.value = false;
      days.value = currentWeek();
    };

    const selectDateDay = async (newSelectedDateDay: string) => {
      selectedDate.value = dayjs(newSelectedDateDay);
      isWeek.value = false;
      isDay.value = true;
      days.value = currentDay();
    };

    const filterMonth = () => {
      isFilter.value = "month";
      isDay.value = false;
      isWeek.value = false;
      days.value = [
        ...previousMonthDays(),
        ...currentMonthDays(),
        ...nextMonthDays(),
      ];
    };

    const filterWeek = () => {
      isFilter.value = "week";
      isDay.value = false;
      isWeek.value = true;
      days.value = currentWeek();
    };

    const filterDay = () => {
      isFilter.value = "day";
      isDay.value = true;
      isWeek.value = false;
      days.value = currentDay();
    };

    const cssVars = computed(() => ({
      "--bg-header": props.bgHeader,
      "--bg-calendar": props.bgCalendar,
      "--color-calendar": props.colorCalendar,
      "--border-color-calendar": props.borderColorCalendar,
      "--bg-not-current-month": props.bgNotCurrentMonth,
      "--bg-item": props.bgItem,
      "--font-size-item": props.fontSizeItem,
      "--color-item": props.colorItem,
    }));

    const filterProps = computed(() => ({
      bgFilter: props.bgFilter,
      fontSizeFilter: props.fontSizeFilter,
      fontWeightFilter: props.fontWeightFilter,
      bgActiveFilter: props.bgActiveFilter,
    }));

    const dateSelectorProps = computed(() => ({
      colorRoot: props.dateSelectorColorRoot,
      colorIndicator: props.dateSelectorColorIndicator,
      colorIcon: props.dateSelectorColorIcon,
      fontSizeIndicator: props.dateSelectorFontSize,
      fontSizeIndicatorMobile: props.dateSelectorFontSizeMobile,
      fontWeightIndicator: props.dateSelectorFontWeight,
    }));

    onMounted(() => {
      if (isFilter.value === "week") {
        days.value = currentWeek();
        return;
      }

      if (isFilter.value === "day") {
        days.value = currentDay();
        return;
      }

      days.value = [
        ...previousMonthDays(),
        ...currentMonthDays(),
        ...nextMonthDays(),
      ];
    });

    return {
      today,
      selectedDate,
      selectDateWeek,
      selectDateDay,
      isDay,
      isFilter,
      selectDate,
      label,
      itemsList,
      days,
      filterMonth,
      filterWeek,
      filterDay,
      cssVars,
      filterProps,
      dateSelectorProps,
    };
  },
});
</script>

<template>
  <article :style="cssVars" class="calendar-month">
    <section class="calendar-month__header">
      <BrCalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        :is-filter="isFilter"
        v-bind="dateSelectorProps"
        @date-selected="selectDate"
        @date-selected-week="selectDateWeek"
        @date-selected-day="selectDateDay"
      />
      <BrCalendarFilter
        :current-date="today"
        v-bind="filterProps"
        @filter-month="filterMonth"
        @filter-week="filterWeek"
        @filter-day="filterDay"
      />
    </section>
    <section>
      <BrCalendarWeekDays :is-day="isDay" />
      <ol :class="['calendar-month__days-grid', { isDay: isDay === true }]">
        <li
          v-for="(day, index) in days"
          :key="index"
          :class="[
            'calendar-month__days-grid--calendar-day',
            {
              'calendar-month__days-grid--calendar-day--not-current':
                !day.isCurrentMonth,
            },
          ]"
        >
          <span v-if="!isDay">{{ label(day) }}</span>
          <span v-else>{{ day.date }}</span>
          <div v-if="day.isCurrentMonth" class="calendar-month--day-content">
            <span
              v-for="(item, itemIndex) in itemsList"
              :key="itemIndex"
              class="calendar-month--day-content--text"
              @click="$emit('item-click', { date: day.date, item })"
            >
              {{ item }}
            </span>
          </div>
        </li>
      </ol>
    </section>
  </article>
</template>

<style scoped lang="scss">
.calendar-month {
  position: relative;
  background-color: var(--bg-header);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
  }

  &__days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: relative;

    &--calendar-day {
      position: relative;
      min-height: 194px;
      font-size: 16px;
      background-color: var(--bg-calendar);
      color: var(--color-calendar);
      border: 0.1px solid var(--border-color-calendar);
      padding: 7px;

      & > span {
        display: flex;
        justify-content: flex-end;
        height: 24px;
        margin-bottom: 1rem;
      }

      &--not-current {
        background-color: var(--bg-not-current-month);
      }
    }
  }

  &--day-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 190px;
    overflow-y: auto;

    &--text {
      width: 100%;
      height: 25px;
      background: var(--bg-item);
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--font-size-item);
      color: var(--color-item);
      cursor: pointer;
    }
  }
}
</style>

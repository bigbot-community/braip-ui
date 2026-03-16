<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import dayjs from "dayjs";
import type { BrCalendarFilterProps, CalendarFilterOption } from "./types";
export default defineComponent({
  name: "BrCalendarFilter",
  props: {
    currentDate: {
      type: String,
      required: true,
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
  },
  setup(props: BrCalendarFilterProps, { emit }) {
    const isFilterActive = ref(1);
    const filters = ref<CalendarFilterOption[]>([
      { id: 1, name: "Month", translationKey: "Mês" },
      { id: 2, name: "Week", translationKey: "Semana" },
      { id: 3, name: "Day", translationKey: "Dia" },
    ]);

    const handleFilterClick = (filter: CalendarFilterOption) => {
      isFilterActive.value = filter.id;
      const newSelectedDate = dayjs(props.currentDate);
      emit(`filter${filter.name}`, newSelectedDate);
    };

    const cssVars = computed(() => ({
      "--bg-filter": props.bgFilter,
      "--font-size-filter": props.fontSizeFilter,
      "--font-weight-filter": props.fontWeightFilter,
      "--bg-active-filter": props.bgActiveFilter,
    }));

    return {
      cssVars,
      filters,
      handleFilterClick,
      isFilterActive,
    };
  },
});
</script>

<template>
  <div :style="cssVars" class="wrapper-filter">
    <div
      v-for="(filter, index) in filters"
      :key="index"
      class="wrapper-filter__item"
      :class="{ active: isFilterActive === filter.id }"
    >
      <span
        class="wrapper-filter__item--text"
        :style="{
          color:
            isFilterActive === filter.id
              ? 'var(--brandPrimary6)'
              : 'var(--brandPrimaryLight3)',
        }"
        @click="handleFilterClick(filter)"
      >
        {{ filter.translationKey }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: var(--bg-filter);
  border-radius: 4px;
  height: 54px;

  &__item {
    padding: 6px 12px;
    height: 34px;
    cursor: pointer;

    &--text {
      font-size: var(--font-size-filter);
      font-weight: var(--font-weight-filter);
    }

    &.active {
      background-color: var(--bg-active-filter);
      border-radius: 2px;
      box-shadow: 0px 4px 8px -8px rgba(41, 51, 64, 0.08);
    }
  }
}
</style>

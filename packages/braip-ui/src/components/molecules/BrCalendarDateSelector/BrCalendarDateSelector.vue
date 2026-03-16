<script lang="ts">
import { defineComponent, computed } from "vue";
import dayjs from "dayjs";
import type { BrCalendarDateSelectorProps } from "./types";
import "dayjs/locale/pt-br";
export default defineComponent({
  name: "BrCalendarDateSelector",
  props: {
    currentDate: {
      type: String,
      required: true,
    },
    selectedDate: {
      type: Object,
      required: true,
    },
    isFilter: {
      type: String,
      default: "month",
    },
    colorRoot: {
      type: String,
      default: "var(--neutralLightGrey1)",
    },
    colorIndicator: {
      type: String,
      default: "var(--neutralDarkGrey1)",
    },
    colorIcon: {
      type: String,
      default: "var(--neutralLightGrey1)",
    },
    fontSizeIndicator: {
      type: String,
      default: "var(--fontSizeTextP2)",
    },
    fontSizeIndicatorMobile: {
      type: String,
      default: "var(--fontSizeTextP3)",
    },
    fontWeightIndicator: {
      type: String,
      default: "500",
    },
  },
  emits: ["dateSelectedWeek", "dateSelectedDay", "dateSelected"],
  setup(props: BrCalendarDateSelectorProps, { emit }) {
    const capitalize = (value: string) => {
      if (!value) return value;
      return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const selectedCurrentDate = computed(() => {
      const baseDate = dayjs(props.selectedDate as unknown as string).locale(
        "pt-br",
      );

      if (props.isFilter === "week") {
        const startOfWeek = baseDate.day(0).format("D");
        const endOfWeek = baseDate.day(6).format("D");
        const monthYear = capitalize(baseDate.format("MMMM YYYY"));
        return `${startOfWeek} - ${endOfWeek} de ${monthYear}`;
      }

      if (props.isFilter === "day") {
        return capitalize(baseDate.format("D [de] MMMM YYYY"));
      }

      return capitalize(baseDate.format("MMMM [de] YYYY"));
    });

    const selectPrevious = () => {
      if (props.isFilter === "week") {
        const newSelectedDate = dayjs(
          props.selectedDate as unknown as string,
        ).subtract(1, "week");

        return emit("dateSelectedWeek", newSelectedDate);
      }

      if (props.isFilter === "day") {
        const newSelectedDate = dayjs(
          props.selectedDate as unknown as string,
        ).subtract(1, "day");

        return emit("dateSelectedDay", newSelectedDate);
      }

      const newSelectedDate = dayjs(
        props.selectedDate as unknown as string,
      ).subtract(1, "month");

      return emit("dateSelected", newSelectedDate);
    };

    const selectCurrent = () => {
      if (props.isFilter === "week") {
        const newSelectedDate = dayjs();
        return emit("dateSelectedWeek", newSelectedDate);
      }

      if (props.isFilter === "day") {
        const newSelectedDate = dayjs();
        return emit("dateSelectedDay", newSelectedDate);
      }

      const newSelectedDate = dayjs();
      return emit("dateSelected", newSelectedDate);
    };

    const selectNext = () => {
      if (props.isFilter === "week") {
        const newSelectedDate = dayjs(
          props.selectedDate as unknown as string,
        ).add(1, "week");

        return emit("dateSelectedWeek", newSelectedDate);
      }

      if (props.isFilter === "day") {
        const newSelectedDate = dayjs(
          props.selectedDate as unknown as string,
        ).add(1, "day");

        return emit("dateSelectedDay", newSelectedDate);
      }

      const newSelectedDate = dayjs(
        props.selectedDate as unknown as string,
      ).add(1, "month");
      return emit("dateSelected", newSelectedDate);
    };

    return {
      cssVars: computed(() => ({
        "--calendar-date-color-root": props.colorRoot,
        "--calendar-date-color-indicator": props.colorIndicator,
        "--calendar-date-color-icon": props.colorIcon,
        "--calendar-date-font-size": props.fontSizeIndicator,
        "--calendar-date-font-size-mobile": props.fontSizeIndicatorMobile,
        "--calendar-date-font-weight": props.fontWeightIndicator,
      })),
      selectedCurrentDate,
      selectPrevious,
      selectCurrent,
      selectNext,
    };
  },
});
</script>

<template>
  <div :style="cssVars" class="calendar-date-selector">
    <span @click="selectPrevious">
      <BrIcon
        class="icon"
        name="arrow-left"
        width="32px"
        height="32px"
        cursos="pointer"
      />
    </span>
    <span class="calendar-date-indicator" @click="selectCurrent">
      {{ selectedCurrentDate }}
    </span>
    <span @click="selectNext">
      <BrIcon
        class="icon"
        name="arrow-right"
        width="32px"
        height="32px"
        cursos="pointer"
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
.calendar-date-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  color: var(--calendar-date-color-root);

  & > * {
    cursor: pointer;
    user-select: none;
  }

  .calendar-date-indicator {
    color: var(--calendar-date-color-indicator);
    font-size: var(--calendar-date-font-size);
    font-weight: var(--calendar-date-font-weight);
    line-height: 160%;

    @media (max-width: 400px) {
      font-size: var(--calendar-date-font-size-mobile);
    }
  }

  .icon {
    color: var(--calendar-date-color-icon);
  }
}
</style>

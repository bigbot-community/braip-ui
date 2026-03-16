<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "BrCalendarWeekDays",
  props: {
    isDay: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const weekdays = computed(() => {
      return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    });

    return {
      weekdays,
    };
  },
});
</script>

<template>
  <ol :class="['day-week', { 'is-day': isDay }]">
    <li v-for="weekday in weekdays" :key="weekday">
      {{ weekday }}
    </li>
  </ol>
</template>

<style scoped lang="scss">
.day-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;

  & > * {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid var(--neutralLightGrey6);
    height: 52px;
    font-size: var(--br-text-base);
    color: var(--neutralDarkGrey5);
    font-weight: 400;
    line-height: 160%;
  }

  .is-day {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 950px) {
    .day-week li {
      min-width: 150px;
    }
  }
}
</style>

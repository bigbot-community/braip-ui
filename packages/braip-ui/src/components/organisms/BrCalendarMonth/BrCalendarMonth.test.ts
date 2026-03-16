import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import BrCalendarMonth from "./BrCalendarMonth.vue";

describe("BrCalendarMonth", () => {
  it("renders custom items", async () => {
    const wrapper = mount(BrCalendarMonth, {
      props: {
        items: ["Reunião", "Entrega"],
      },
      global: {
        stubs: {
          BrCalendarDateSelector: true,
          BrCalendarFilter: true,
          BrCalendarWeekDays: true,
        },
      },
    });

    await nextTick();

    expect(wrapper.text()).toContain("Reunião");
    expect(wrapper.text()).toContain("Entrega");
  });

  it("uses day view when initialFilter is day", async () => {
    const wrapper = mount(BrCalendarMonth, {
      props: {
        initialFilter: "day",
        initialIsDay: true,
        initialIsWeek: false,
      },
      global: {
        stubs: {
          BrCalendarDateSelector: true,
          BrCalendarFilter: true,
          BrCalendarWeekDays: true,
        },
      },
    });

    await nextTick();

    expect(wrapper.text()).toContain("00:00 - 04:00");
  });
});

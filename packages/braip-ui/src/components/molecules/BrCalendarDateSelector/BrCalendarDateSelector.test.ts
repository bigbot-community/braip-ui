import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import dayjs from "dayjs";
import BrCalendarDateSelector from "./BrCalendarDateSelector.vue";

describe("BrCalendarDateSelector", () => {
  it("emits dateSelected on previous click when filter is month", async () => {
    const wrapper = mount(BrCalendarDateSelector, {
      props: {
        currentDate: "2024-01-15",
        selectedDate: dayjs("2024-01-15"),
        isFilter: "month",
      },
      global: {
        stubs: {
          BrIcon: { template: "<i />" },
        },
      },
    });

    const buttons = wrapper.findAll("span");
    await buttons[0].trigger("click");

    const emitted = wrapper.emitted("dateSelected");
    expect(emitted).toBeTruthy();
    expect(dayjs.isDayjs(emitted![0][0])).toBe(true);
  });

  it("emits dateSelectedWeek on next click when filter is week", async () => {
    const wrapper = mount(BrCalendarDateSelector, {
      props: {
        currentDate: "2024-01-15",
        selectedDate: dayjs("2024-01-15"),
        isFilter: "week",
      },
      global: {
        stubs: {
          BrIcon: { template: "<i />" },
        },
      },
    });

    const buttons = wrapper.findAll("span");
    await buttons[2].trigger("click");

    expect(wrapper.emitted("dateSelectedWeek")).toBeTruthy();
  });

  it("emits dateSelectedDay on current click when filter is day", async () => {
    const wrapper = mount(BrCalendarDateSelector, {
      props: {
        currentDate: "2024-01-15",
        selectedDate: dayjs("2024-01-15"),
        isFilter: "day",
      },
      global: {
        stubs: {
          BrIcon: { template: "<i />" },
        },
      },
    });

    const buttons = wrapper.findAll("span");
    await buttons[1].trigger("click");

    expect(wrapper.emitted("dateSelectedDay")).toBeTruthy();
  });
});

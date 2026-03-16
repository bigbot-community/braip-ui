import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrCalendarFilter from "./BrCalendarFilter.vue";

describe("BrCalendarFilter", () => {
  it("renders the three filters", () => {
    const wrapper = mount(BrCalendarFilter, {
      props: {
        currentDate: "2024-01-15",
      },
    });

    const items = wrapper.findAll(".wrapper-filter__item--text");
    expect(items.length).toBe(3);
    expect(wrapper.text()).toContain("Mês");
    expect(wrapper.text()).toContain("Semana");
    expect(wrapper.text()).toContain("Dia");
  });

  it("emits filterWeek when week filter is clicked", async () => {
    const wrapper = mount(BrCalendarFilter, {
      props: {
        currentDate: "2024-01-15",
      },
    });

    const items = wrapper.findAll(".wrapper-filter__item--text");
    await items[1].trigger("click");

    expect(wrapper.emitted("filterWeek")).toBeTruthy();
  });

  it("emits filterDay when day filter is clicked", async () => {
    const wrapper = mount(BrCalendarFilter, {
      props: {
        currentDate: "2024-01-15",
      },
    });

    const items = wrapper.findAll(".wrapper-filter__item--text");
    await items[2].trigger("click");

    expect(wrapper.emitted("filterDay")).toBeTruthy();
  });
});

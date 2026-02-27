import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrInputRange from "./BrInputRange.vue";

describe("BrInputRange", () => {
  it("renders both range inputs", () => {
    const wrapper = mount(BrInputRange);
    const inputs = wrapper.findAll("input[type='range']");
    expect(inputs.length).toBe(2);
  });

  it("renders default values", () => {
    const wrapper = mount(BrInputRange);
    expect(wrapper.text()).toContain("0%");
    expect(wrapper.text()).toContain("100%");
  });

  it("accepts initial prop value", () => {
    const wrapper = mount(BrInputRange, {
      props: {
        value: [20, 80],
      },
    });

    expect(wrapper.text()).toContain("20%");
    expect(wrapper.text()).toContain("80%");
  });

  it("updates internal value when prop changes", async () => {
    const wrapper = mount(BrInputRange, {
      props: {
        value: [10, 50],
      },
    });

    await wrapper.setProps({ value: [30, 70] });

    expect(wrapper.text()).toContain("30%");
    expect(wrapper.text()).toContain("70%");
  });

  it("emits input event on change", async () => {
    const wrapper = mount(BrInputRange);

    const inputs = wrapper.findAll("input[type='range']");
    await inputs[0].setValue(10);
    await inputs[0].trigger("input");

    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("respects spacing rule", async () => {
    const wrapper = mount(BrInputRange, {
      props: {
        min: 0,
        max: 100,
        spacing: 10,
        value: [20, 30],
      },
    });

    const inputs = wrapper.findAll("input[type='range']");
    await inputs[1].setValue(25);
    await inputs[1].trigger("input");

    const emitted = wrapper.emitted("input") as
      | Array<[[number, number]]>
      | undefined;
    expect(emitted?.length).toBeGreaterThan(0);
    const lastEmit = emitted![emitted!.length - 1][0];

    expect(lastEmit[1] - lastEmit[0]).toBeGreaterThanOrEqual(10);
  });

  it("applies gradient background style", async () => {
    const wrapper = mount(BrInputRange, {
      props: {
        value: [25, 75],
      },
    });

    const input = wrapper.find("input[type='range']")
      .element as HTMLInputElement;

    expect(input.style.background).toContain("linear-gradient");
  });
});

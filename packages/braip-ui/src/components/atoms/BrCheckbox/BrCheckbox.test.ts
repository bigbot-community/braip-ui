import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrCheckbox from "./BrCheckbox.vue";

describe("BrCheckbox", () => {
  it("renders as label element", () => {
    const wrapper = mount(BrCheckbox);
    expect(wrapper.element.tagName).toBe("LABEL");
  });

  it("contains hidden input element", () => {
    const wrapper = mount(BrCheckbox);
    const input = wrapper.find('input[type="checkbox"]');
    expect(input.exists()).toBe(true);
  });

  it("toggles value on change", async () => {
    let modelValue: boolean = false;
    const wrapper = mount(BrCheckbox, {
      props: {
        modelValue,
        "onUpdate:modelValue": (e: unknown) => {
          modelValue = e as boolean;
          wrapper.setProps({ modelValue });
        },
      },
    });
    expect(wrapper.props("modelValue")).toBe(false);
    await wrapper.find("input").trigger("change");
    expect(wrapper.props("modelValue")).toBe(true);
  });

  it("renders label text", () => {
    const wrapper = mount(BrCheckbox, {
      props: { label: "Accept terms" },
    });
    expect(wrapper.text()).toContain("Accept terms");
  });

  it("renders slot content as label", () => {
    const wrapper = mount(BrCheckbox, {
      slots: {
        default: "Custom label",
      },
    });
    expect(wrapper.text()).toContain("Custom label");
  });

  it("applies checked class when checked", () => {
    const wrapper = mount(BrCheckbox, {
      props: { modelValue: true },
    });
    expect(wrapper.classes()).toContain("br-checkbox--checked");
  });

  it("applies error class when error prop is true", () => {
    const wrapper = mount(BrCheckbox, {
      props: { error: true },
    });
    expect(wrapper.classes()).toContain("br-checkbox--error");
  });

  it("applies disabled class when disabled", () => {
    const wrapper = mount(BrCheckbox, {
      props: { disabled: true },
    });
    expect(wrapper.classes()).toContain("br-checkbox--disabled");
  });

  it("does not toggle when disabled", async () => {
    let modelValue: boolean = false;
    const wrapper = mount(BrCheckbox, {
      props: {
        modelValue,
        disabled: true,
        "onUpdate:modelValue": (e: unknown) => {
          modelValue = e as boolean;
          wrapper.setProps({ modelValue });
        },
      },
    });
    await wrapper.find("input").trigger("change");
    expect(wrapper.props("modelValue")).toBe(false);
  });

  it("applies correct size class", () => {
    const sizes = ["sm", "md", "lg"] as const;
    sizes.forEach((size) => {
      const wrapper = mount(BrCheckbox, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`br-checkbox--${size}`);
    });
  });

  it("applies indeterminate class when indeterminate", () => {
    const wrapper = mount(BrCheckbox, {
      props: { indeterminate: true },
    });
    expect(wrapper.classes()).toContain("br-checkbox--indeterminate");
  });

  it("renders helper text", () => {
    const wrapper = mount(BrCheckbox, {
      props: { helperText: "This is required" },
    });
    expect(wrapper.text()).toContain("This is required");
  });

  it("shows check icon when checked", () => {
    const wrapper = mount(BrCheckbox, {
      props: { modelValue: true },
    });
    expect(wrapper.find(".br-checkbox__icon").exists()).toBe(true);
  });

  it("works with array model for multiple selection", async () => {
    let modelValue: string[] = ["a", "b"];
    const wrapper = mount(BrCheckbox, {
      props: {
        modelValue,
        trueValue: "c",
        "onUpdate:modelValue": (e: unknown) => {
          modelValue = e as string[];
          wrapper.setProps({ modelValue });
        },
      },
    });
    await wrapper.find("input").trigger("change");
    expect(wrapper.props("modelValue")).toContain("c");
  });
});

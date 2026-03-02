import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrInput from "./BrInput.vue";

describe("BrInput", () => {
  it("renders input element", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.find("input").exists()).toBe(true);
  });
  it("has base class", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.classes()).toContain("br-input");
  });

  it("applies default size class", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.classes()).toContain("br-input--md");
  });

  it("applies correct size class", () => {
    const sizes = ["sm", "md", "lg"] as const;
    sizes.forEach((size) => {
      const wrapper = mount(BrInput, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`br-input--${size}`);
    });
  });

  it("applies block class by default", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.classes()).toContain("br-input--block");
  });

  it("does not apply block class when block is false", () => {
    const wrapper = mount(BrInput, {
      props: { block: false },
    });
    expect(wrapper.classes()).not.toContain("br-input--block");
  });

  it("applies error class when error prop is true", () => {
    const wrapper = mount(BrInput, {
      props: { error: true },
    });
    expect(wrapper.classes()).toContain("br-input--error");
  });

  it("does not apply error class by default", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.classes()).not.toContain("br-input--error");
  });

  it("applies disabled class when disabled prop is true", () => {
    const wrapper = mount(BrInput, {
      props: { disabled: true },
    });
    expect(wrapper.classes()).toContain("br-input--disabled");
  });

  it("sets placeholder attribute", () => {
    const wrapper = mount(BrInput, {
      props: { placeholder: "Enter text" },
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe("Enter text");
  });

  it("sets type attribute", () => {
    const wrapper = mount(BrInput, {
      props: { type: "password" },
    });
    expect(wrapper.find("input").attributes("type")).toBe("password");
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(BrInput, {
      props: { disabled: true },
    });
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("is readonly when readonly prop is true", () => {
    const wrapper = mount(BrInput, {
      props: { readonly: true },
    });
    expect(wrapper.find("input").attributes("readonly")).toBeDefined();
  });

  it("emits input event on input", async () => {
    const wrapper = mount(BrInput);
    const input = wrapper.find("input");
    await input.setValue("hello");
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")![0]).toEqual(["hello"]);
  });

  it("emits input with number for number type", async () => {
    const wrapper = mount(BrInput, {
      props: { type: "number" },
    });
    const input = wrapper.find("input");
    await input.setValue("42");
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")![0]).toEqual([42]);
  });

  it("emits focus event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits focusout event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("focusout");
    expect(wrapper.emitted("focusout")).toBeTruthy();
  });

  it("emits keydown event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("keydown");
    expect(wrapper.emitted("keydown")).toBeTruthy();
  });

  it("emits keyup event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("keyup");
    expect(wrapper.emitted("keyup")).toBeTruthy();
  });

  it("emits click event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("sets maxlength attribute", () => {
    const wrapper = mount(BrInput, {
      props: { maxLength: 10 },
    });
    expect(wrapper.find("input").attributes("maxlength")).toBe("10");
  });

  it("sets min and max attributes", () => {
    const wrapper = mount(BrInput, {
      props: { min: 0, max: 100 },
    });
    expect(wrapper.find("input").attributes("min")).toBe("0");
    expect(wrapper.find("input").attributes("max")).toBe("100");
  });
});

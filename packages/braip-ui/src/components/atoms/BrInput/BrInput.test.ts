import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrInput from "./BrInput.vue";

describe("BrInput", () => {
  it("renders input element", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("binds v-model correctly", async () => {
    let modelValue = "initial";
    const wrapper = mount(BrInput, {
      props: {
        modelValue,
        "onUpdate:modelValue": (e: unknown) => {
          modelValue = e as string;
          wrapper.setProps({ modelValue });
        },
      },
    });
    const input = wrapper.find("input");
    expect(input.element.value).toBe("initial");

    await input.setValue("updated");
    expect(wrapper.props("modelValue")).toBe("updated");
  });

  it("applies correct size class", () => {
    const wrapper = mount(BrInput, {
      props: { size: "lg" },
    });
    expect(wrapper.classes()).toContain("br-input--lg");
  });

  it("applies error class when error prop is true", () => {
    const wrapper = mount(BrInput, {
      props: { error: true },
    });
    expect(wrapper.classes()).toContain("br-input--error");
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

  it("emits focus event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits blur event", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits enter event on Enter key", async () => {
    const wrapper = mount(BrInput);
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("enter")).toBeTruthy();
  });

  it("applies block class by default", () => {
    const wrapper = mount(BrInput);
    expect(wrapper.classes()).toContain("br-input--block");
  });

  it("exposes focus method", () => {
    const wrapper = mount(BrInput);
    expect(typeof wrapper.vm.focus).toBe("function");
  });
});

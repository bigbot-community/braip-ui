import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BrButton from "./BrButton.vue";

describe("BrButton", () => {
  it("renders slot content", () => {
    const wrapper = mount(BrButton, {
      slots: {
        default: "Click me",
      },
    });
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies correct variant class", () => {
    const wrapper = mount(BrButton, {
      props: { variant: "secondary" },
    });
    expect(wrapper.classes()).toContain("br-button--secondary");
  });

  it("applies correct size class", () => {
    const wrapper = mount(BrButton, {
      props: { size: "lg" },
    });
    expect(wrapper.classes()).toContain("br-button--lg");
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(BrButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(BrButton, {
      props: { disabled: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  it("does not emit click when loading", async () => {
    const wrapper = mount(BrButton, {
      props: { loading: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  it("shows spinner when loading", () => {
    const wrapper = mount(BrButton, {
      props: { loading: true },
    });
    expect(wrapper.find(".br-button__loader").exists()).toBe(true);
  });

  it("applies block class when block prop is true", () => {
    const wrapper = mount(BrButton, {
      props: { block: true },
    });
    expect(wrapper.classes()).toContain("br-button--block");
  });

  it("has correct button type attribute", () => {
    const wrapper = mount(BrButton, {
      props: { type: "submit" },
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(BrButton, {
      props: { disabled: true },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});

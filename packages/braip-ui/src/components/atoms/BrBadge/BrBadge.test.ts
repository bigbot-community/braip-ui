import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrBadge from "./BrBadge.vue";

describe("BrBadge", () => {
  it("renders slot content", () => {
    const wrapper = mount(BrBadge, {
      slots: {
        default: "Active",
      },
    });
    expect(wrapper.text()).toBe("Active");
  });

  it("renders as span element", () => {
    const wrapper = mount(BrBadge);
    expect(wrapper.element.tagName).toBe("SPAN");
  });

  it("applies default variant class", () => {
    const wrapper = mount(BrBadge);
    expect(wrapper.classes()).toContain("br-badge--default");
  });

  it("applies correct variant class", () => {
    const variants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ] as const;
    variants.forEach((variant) => {
      const wrapper = mount(BrBadge, {
        props: { variant },
      });
      expect(wrapper.classes()).toContain(`br-badge--${variant}`);
    });
  });

  it("applies correct size class", () => {
    const sizes = ["sm", "md", "lg"] as const;
    sizes.forEach((size) => {
      const wrapper = mount(BrBadge, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`br-badge--${size}`);
    });
  });

  it("applies rounded class when rounded prop is true", () => {
    const wrapper = mount(BrBadge, {
      props: { rounded: true },
    });
    expect(wrapper.classes()).toContain("br-badge--rounded");
  });

  it("does not apply rounded class by default", () => {
    const wrapper = mount(BrBadge);
    expect(wrapper.classes()).not.toContain("br-badge--rounded");
  });

  it("has base class", () => {
    const wrapper = mount(BrBadge);
    expect(wrapper.classes()).toContain("br-badge");
  });
});

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import BrText from "./BrText.vue";

describe("BrText", () => {
  it("renders default text", () => {
    const wrapper = mount(BrText);
    expect(wrapper.text()).toBe("Typography");
  });

  it("renders custom text", () => {
    const wrapper = mount(BrText, {
      props: {
        text: "Texto personalizado",
      },
    });
    expect(wrapper.text()).toBe("Texto personalizado");
  });

  it("renders the correct semantic element for title", () => {
    const wrapper = mount(BrText, {
      props: {
        type: "title-h1",
      },
    });
    expect(wrapper.element.tagName).toBe("H1");
  });

  it("renders paragraph for body text types", () => {
    const wrapper = mount(BrText, {
      props: {
        type: "text-p4",
      },
    });
    expect(wrapper.element.tagName).toBe("P");
  });

  it("applies classes for type and weight", () => {
    const wrapper = mount(BrText, {
      props: {
        type: "text-p3",
        weight: "semi-bold",
      },
    });
    expect(wrapper.classes()).toContain("text-p3");
    expect(wrapper.classes()).toContain("text-p3-semi-bold");
    expect(wrapper.classes()).toContain("typography");
  });

  it("applies single-line class when singleLine is true", () => {
    const wrapper = mount(BrText, {
      props: {
        singleLine: true,
      },
    });
    expect(wrapper.classes()).toContain("single-line");
  });

  it("does not apply single-line class by default", () => {
    const wrapper = mount(BrText);
    expect(wrapper.classes()).not.toContain("single-line");
  });

  it("accepts custom visual props", () => {
    const wrapper = mount(BrText, {
      props: {
        color: "#ff0000",
        textAlign: "center",
        fontFamily: "Sora",
      },
    });

    expect(wrapper.props("color")).toBe("#ff0000");
    expect(wrapper.props("textAlign")).toBe("center");
    expect(wrapper.props("fontFamily")).toBe("Sora");
  });
});

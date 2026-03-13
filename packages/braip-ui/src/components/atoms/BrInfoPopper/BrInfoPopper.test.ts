import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import BrInfoPopper from "./BrInfoPopper.vue";

describe("BrInfoPopper", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 1024,
    });
  });

  it("renders default icon trigger when no default slot is provided", () => {
    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
      },
    });

    expect(wrapper.find(".icon-trigger").exists()).toBe(true);
    expect(wrapper.find(".icon-trigger__svg").exists()).toBe(true);
    expect(wrapper.find(".slot-wrapper").exists()).toBe(false);
  });

  it("does not render icon when iconVisible is false", () => {
    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
        iconVisible: false,
      },
    });

    expect(wrapper.find(".icon-trigger").exists()).toBe(false);
    expect(wrapper.find(".icon-trigger__svg").exists()).toBe(false);
  });

  it("renders slot trigger when default slot is provided", () => {
    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
      },
      slots: {
        default: "<button class='custom-trigger'>Hover</button>",
      },
    });

    expect(wrapper.find(".slot-wrapper").exists()).toBe(true);
    expect(wrapper.find(".custom-trigger").exists()).toBe(true);
    expect(wrapper.find(".icon-trigger").exists()).toBe(false);
  });

  it("shows and hides popper on hover", async () => {
    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
      },
    });

    expect(wrapper.find(".popper").exists()).toBe(false);

    await wrapper.find(".icon-trigger").trigger("mouseover");
    expect(wrapper.find(".popper").exists()).toBe(true);
    expect(wrapper.find(".popper").text()).toBe("Tooltip content");

    await wrapper.find(".icon-trigger").trigger("mouseleave");
    expect(wrapper.find(".popper").exists()).toBe(false);
  });

  it("applies custom CSS variables and position class", async () => {
    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
        width: "320px",
        position: "left",
      },
    });

    await wrapper.find(".icon-trigger").trigger("mouseover");
    const popper = wrapper.find(".popper");

    expect(wrapper.attributes("style")).toContain("--width: 320px;");
    expect(popper.classes()).toContain("left");
  });

  it("adjusts popper left position when it overflows the viewport", async () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 100,
    });

    const wrapper = mount(BrInfoPopper, {
      props: {
        content: "Tooltip content",
      },
    });

    await wrapper.find(".icon-trigger").trigger("mouseover");
    const popper = wrapper.find(".popper").element as HTMLElement;

    Object.defineProperty(popper, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          left: 90,
          width: 30,
        }) as DOMRect,
    });

    (wrapper.vm as any).adjustPopperPosition();

    expect(popper.style.left).toBe("-20px");
  });
});

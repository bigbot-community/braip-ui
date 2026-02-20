import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import BrModal from "./BrModal.vue";

describe("BrModal", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("renders when open", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal").exists()).toBe(true);
  });

  it("does not render when closed", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: false },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal").exists()).toBe(false);
  });

  it("renders title", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true, title: "Test Modal" },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal__title").text()).toBe("Test Modal");
  });

  it("renders slot content", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true },
      slots: {
        default: "<p>Modal content</p>",
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal__body").html()).toContain("Modal content");
  });

  it("emits close when close button clicked", async () => {
    const wrapper = mount(BrModal, {
      props: {
        modelValue: true,
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__close").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("closes on backdrop click by default", async () => {
    const wrapper = mount(BrModal, {
      props: {
        modelValue: true,
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__backdrop").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("does not close on backdrop click when closeOnClickOutside is false", async () => {
    const wrapper = mount(BrModal, {
      props: {
        modelValue: true,
        closeOnClickOutside: false,
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__backdrop").trigger("click");
    expect(wrapper.emitted("close")).toBeFalsy();
  });

  it("applies correct variant class", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true, variant: "aside" },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal").classes()).toContain("br-modal--aside");
  });

  it("applies correct size class", () => {
    const sizes = ["sm", "md", "lg", "xl"] as const;
    sizes.forEach((size) => {
      const wrapper = mount(BrModal, {
        props: { modelValue: true, size },
        global: {
          stubs: {
            teleport: true,
          },
        },
      });
      expect(wrapper.find(".br-modal").classes()).toContain(
        `br-modal--${size}`,
      );
    });
  });

  it("hides close button when closable is false", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true, closable: false },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal__close").exists()).toBe(false);
  });

  it("shows footer when showFooter is true", () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true, showFooter: true },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.find(".br-modal__footer").exists()).toBe(true);
  });

  it("emits confirm when confirm button clicked", async () => {
    const wrapper = mount(BrModal, {
      props: { modelValue: true, showFooter: true },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__btn--confirm").trigger("click");
    expect(wrapper.emitted("confirm")).toBeTruthy();
  });

  it("emits cancel when cancel button clicked", async () => {
    const wrapper = mount(BrModal, {
      props: {
        modelValue: true,
        showFooter: true,
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__btn--cancel").trigger("click");
    expect(wrapper.emitted("cancel")).toBeTruthy();
  });

  it("does not close when persistent is true", async () => {
    const wrapper = mount(BrModal, {
      props: {
        modelValue: true,
        persistent: true,
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.find(".br-modal__backdrop").trigger("click");
    expect(wrapper.emitted("close")).toBeFalsy();
    expect(wrapper.props("modelValue")).toBe(true);
  });
});

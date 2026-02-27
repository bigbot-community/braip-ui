import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrInputRange from "./BrInputRange.vue";

describe("BrInputRange", () => {
  it("renders input range element", () => {
    const wrapper = mount(BrInputRange);
    expect(wrapper.find("input[type='range']").exists()).toBe(true);
  });
});

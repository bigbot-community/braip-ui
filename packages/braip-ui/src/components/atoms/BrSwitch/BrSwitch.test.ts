import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BrSwitch from './BrSwitch.vue'

describe('BrSwitch', () => {
  it('renders as button element', () => {
    const wrapper = mount(BrSwitch)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('has role="switch" attribute', () => {
    const wrapper = mount(BrSwitch)
    expect(wrapper.attributes('role')).toBe('switch')
  })

  it('toggles value on click', async () => {
    const wrapper = mount(BrSwitch, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e: boolean) => wrapper.setProps({ modelValue: e }),
      },
    })
    expect(wrapper.props('modelValue')).toBe(false)
    await wrapper.trigger('click')
    expect(wrapper.props('modelValue')).toBe(true)
  })

  it('applies checked class when value is true', () => {
    const wrapper = mount(BrSwitch, {
      props: { modelValue: true },
    })
    expect(wrapper.classes()).toContain('br-switch--checked')
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(BrSwitch, {
      props: {
        modelValue: false,
        disabled: true,
        'onUpdate:modelValue': (e: boolean) => wrapper.setProps({ modelValue: e }),
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.props('modelValue')).toBe(false)
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(BrSwitch, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('br-switch--disabled')
  })

  it('applies correct size class', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(BrSwitch, {
        props: { size },
      })
      expect(wrapper.classes()).toContain(`br-switch--${size}`)
    })
  })

  it('has aria-checked attribute reflecting state', () => {
    const wrapperFalse = mount(BrSwitch, {
      props: { modelValue: false },
    })
    expect(wrapperFalse.attributes('aria-checked')).toBe('false')

    const wrapperTrue = mount(BrSwitch, {
      props: { modelValue: true },
    })
    expect(wrapperTrue.attributes('aria-checked')).toBe('true')
  })

  it('contains track and thumb elements', () => {
    const wrapper = mount(BrSwitch)
    expect(wrapper.find('.br-switch__track').exists()).toBe(true)
    expect(wrapper.find('.br-switch__thumb').exists()).toBe(true)
  })
})

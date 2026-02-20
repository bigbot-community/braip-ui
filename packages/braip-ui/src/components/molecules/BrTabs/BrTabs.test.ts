import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BrTabs from './BrTabs.vue'

describe('BrTabs', () => {
  const mockItems = [
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content 3', disabled: true },
  ]

  it('renders tabs from items prop', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    const tabs = wrapper.findAll('.br-tabs__tab')
    expect(tabs).toHaveLength(3)
  })

  it('renders tab labels', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    expect(wrapper.text()).toContain('Tab 1')
    expect(wrapper.text()).toContain('Tab 2')
    expect(wrapper.text()).toContain('Tab 3')
  })

  it('applies active class to selected tab', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    const activeTab = wrapper.find('.br-tabs__tab--active')
    expect(activeTab.text()).toContain('Tab 1')
  })

  it('changes active tab on click', async () => {
    let modelValue = 'tab1'
    const wrapper = mount(BrTabs, {
      props: {
        items: mockItems,
        modelValue,
        'onUpdate:modelValue': (e: unknown) => {
          modelValue = e as string
          wrapper.setProps({ modelValue })
        },
      },
    })
    const tabs = wrapper.findAll('.br-tabs__tab')
    await tabs[1].trigger('click')
    expect(wrapper.props('modelValue')).toBe('tab2')
  })

  it('does not activate disabled tab', async () => {
    let modelValue = 'tab1'
    const wrapper = mount(BrTabs, {
      props: {
        items: mockItems,
        modelValue,
        'onUpdate:modelValue': (e: unknown) => {
          modelValue = e as string
          wrapper.setProps({ modelValue })
        },
      },
    })
    const tabs = wrapper.findAll('.br-tabs__tab')
    await tabs[2].trigger('click')
    expect(wrapper.props('modelValue')).toBe('tab1')
  })

  it('applies disabled class to disabled tabs', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    const disabledTab = wrapper.find('.br-tabs__tab--disabled')
    expect(disabledTab.text()).toContain('Tab 3')
  })

  it('applies correct variant class', () => {
    const variants = ['default', 'pills', 'underline', 'enclosed'] as const
    variants.forEach((variant) => {
      const wrapper = mount(BrTabs, {
        props: { items: mockItems, modelValue: 'tab1', variant },
      })
      expect(wrapper.classes()).toContain(`br-tabs--${variant}`)
    })
  })

  it('applies correct size class', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(BrTabs, {
        props: { items: mockItems, modelValue: 'tab1', size },
      })
      expect(wrapper.classes()).toContain(`br-tabs--${size}`)
    })
  })

  it('applies vertical class when vertical prop is true', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1', vertical: true },
    })
    expect(wrapper.classes()).toContain('br-tabs--vertical')
  })

  it('applies centered class when centered prop is true', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1', centered: true },
    })
    expect(wrapper.classes()).toContain('br-tabs--centered')
  })

  it('applies grow class when grow prop is true', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1', grow: true },
    })
    expect(wrapper.classes()).toContain('br-tabs--grow')
  })

  it('renders badges when provided', () => {
    const itemsWithBadge = [
      { id: 'tab1', label: 'Tab 1', badge: 5 },
      { id: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(BrTabs, {
      props: { items: itemsWithBadge, modelValue: 'tab1' },
    })
    expect(wrapper.find('.br-tabs__tab-badge').text()).toBe('5')
  })

  it('shows close button when closable is true', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1', closable: true },
    })
    expect(wrapper.find('.br-tabs__tab-close').exists()).toBe(true)
  })

  it('emits tab-close when close button clicked', async () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1', closable: true },
    })
    await wrapper.find('.br-tabs__tab-close').trigger('click')
    expect(wrapper.emitted('tab-close')).toBeTruthy()
    expect(wrapper.emitted('tab-close')![0]).toEqual(['tab1'])
  })

  it('has correct accessibility attributes', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    const tablist = wrapper.find('[role="tablist"]')
    expect(tablist.exists()).toBe(true)

    const tabs = wrapper.findAll('[role="tab"]')
    expect(tabs).toHaveLength(3)

    const selectedTab = wrapper.find('[aria-selected="true"]')
    expect(selectedTab.text()).toContain('Tab 1')
  })

  it('renders panel content for active tab', () => {
    const wrapper = mount(BrTabs, {
      props: { items: mockItems, modelValue: 'tab1' },
    })
    const visiblePanel = wrapper.find('.br-tabs__panel[style=""]') || wrapper.find('.br-tabs__panel:not([style*="display: none"])')
    expect(wrapper.text()).toContain('Content 1')
  })
})

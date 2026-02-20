export interface SidebarItem {
  /**
   * Unique identifier
   */
  id: string | number

  /**
   * Item label
   */
  label: string

  /**
   * Item icon
   */
  icon?: string

  /**
   * Link href
   */
  href?: string

  /**
   * Vue router to
   */
  to?: string | object

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Children items (for nested navigation)
   */
  children?: SidebarItem[]

  /**
   * Badge content
   */
  badge?: string | number

  /**
   * Badge variant
   */
  badgeVariant?: 'primary' | 'success' | 'warning' | 'danger'

  /**
   * Click handler
   */
  onClick?: () => void

  /**
   * Section divider (render as section header)
   */
  divider?: boolean
}

export type SidebarVariant = 'default' | 'compact' | 'mini'

export interface SidebarProps {
  /**
   * Navigation items
   */
  items?: SidebarItem[]

  /**
   * Sidebar variant
   * @default 'default'
   */
  variant?: SidebarVariant

  /**
   * Collapsed state (mini mode)
   * @default false
   */
  collapsed?: boolean

  /**
   * Show collapse toggle
   * @default true
   */
  showToggle?: boolean

  /**
   * Elevated (shadow)
   * @default true
   */
  elevated?: boolean

  /**
   * Fixed position
   * @default false
   */
  fixed?: boolean

  /**
   * Sidebar width
   */
  width?: string | number

  /**
   * Collapsed width
   */
  collapsedWidth?: string | number

  /**
   * Show logo/brand area
   * @default true
   */
  showBrand?: boolean

  /**
   * Brand/logo text
   */
  brand?: string

  /**
   * Brand logo URL
   */
  logo?: string
}

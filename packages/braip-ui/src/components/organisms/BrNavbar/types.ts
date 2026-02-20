export interface NavbarItem {
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
   * Children items (for dropdown)
   */
  children?: NavbarItem[]

  /**
   * Badge content
   */
  badge?: string | number

  /**
   * Click handler
   */
  onClick?: () => void
}

export type NavbarVariant = 'default' | 'transparent' | 'colored'
export type NavbarPosition = 'static' | 'fixed' | 'sticky'

export interface NavbarProps {
  /**
   * Navigation items
   */
  items?: NavbarItem[]

  /**
   * Brand/logo text
   */
  brand?: string

  /**
   * Brand logo URL
   */
  logo?: string

  /**
   * Navbar variant
   * @default 'default'
   */
  variant?: NavbarVariant

  /**
   * Position
   * @default 'static'
   */
  position?: NavbarPosition

  /**
   * Show mobile menu toggle
   * @default true
   */
  showMobileToggle?: boolean

  /**
   * Elevated (shadow)
   * @default true
   */
  elevated?: boolean

  /**
   * Dense mode (smaller height)
   * @default false
   */
  dense?: boolean

  /**
   * Primary color (for colored variant)
   */
  color?: string
}

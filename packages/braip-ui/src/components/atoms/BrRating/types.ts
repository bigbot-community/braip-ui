export type RatingSize = 'sm' | 'md' | 'lg' | 'xl'

export interface RatingProps {
  /**
   * Maximum rating value
   * @default 5
   */
  max?: number

  /**
   * Rating size
   * @default 'md'
   */
  size?: RatingSize

  /**
   * Allow half ratings
   * @default false
   */
  allowHalf?: boolean

  /**
   * Read-only state
   * @default false
   */
  readonly?: boolean

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Show value label
   * @default false
   */
  showValue?: boolean

  /**
   * Custom active color
   */
  activeColor?: string

  /**
   * Custom inactive color
   */
  inactiveColor?: string

  /**
   * Custom icon
   */
  icon?: 'star' | 'heart' | 'circle'

  /**
   * Clearable (allow setting to 0)
   * @default false
   */
  clearable?: boolean
}

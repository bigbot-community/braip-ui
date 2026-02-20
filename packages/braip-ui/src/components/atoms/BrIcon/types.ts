export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IconName = string

export interface IconProps {
  /**
   * Icon name
   */
  name: IconName

  /**
   * Icon size
   * @default 'md'
   */
  size?: IconSize

  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string

  /**
   * Spin animation
   * @default false
   */
  spin?: boolean

  /**
   * Aria label for accessibility
   */
  ariaLabel?: string
}

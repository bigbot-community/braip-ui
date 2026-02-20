export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps {
  /**
   * Switch size
   * @default 'md'
   */
  size?: SwitchSize

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
}

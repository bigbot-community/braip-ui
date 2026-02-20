export type RadioSize = 'sm' | 'md' | 'lg'

export interface RadioProps {
  /**
   * Radio value
   */
  value: string | number | boolean

  /**
   * Radio label
   */
  label?: string

  /**
   * Radio name (for grouping)
   */
  name?: string

  /**
   * Radio size
   * @default 'md'
   */
  size?: RadioSize

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Error state
   * @default false
   */
  error?: boolean

  /**
   * Helper text
   */
  helperText?: string
}

export interface RadioGroupProps {
  /**
   * Radio group name
   */
  name: string

  /**
   * Radio group label
   */
  label?: string

  /**
   * Radio options
   */
  options: Array<{
    value: string | number | boolean
    label: string
    disabled?: boolean
  }>

  /**
   * Layout direction
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical'

  /**
   * Radio size
   * @default 'md'
   */
  size?: RadioSize

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Error state
   * @default false
   */
  error?: boolean

  /**
   * Error message
   */
  errorMessage?: string
}

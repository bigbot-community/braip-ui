export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps {
  /**
   * Checkbox label
   */
  label?: string

  /**
   * Checkbox size
   * @default 'md'
   */
  size?: CheckboxSize

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Indeterminate state
   * @default false
   */
  indeterminate?: boolean

  /**
   * Error state
   * @default false
   */
  error?: boolean

  /**
   * Helper text
   */
  helperText?: string

  /**
   * Value when checked
   */
  trueValue?: string | number | boolean

  /**
   * Value when unchecked
   */
  falseValue?: string | number | boolean
}

export interface CheckboxGroupProps {
  /**
   * Group label
   */
  label?: string

  /**
   * Checkbox options
   */
  options: Array<{
    value: string | number
    label: string
    disabled?: boolean
  }>

  /**
   * Layout direction
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical'

  /**
   * Checkbox size
   * @default 'md'
   */
  size?: CheckboxSize

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

  /**
   * Minimum selections required
   */
  min?: number

  /**
   * Maximum selections allowed
   */
  max?: number
}

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
export type SpinnerStatus = 'loading' | 'success' | 'error'

export interface SpinnerProps {
  /**
   * Spinner size
   * @default 'md'
   */
  size?: SpinnerSize

  /**
   * Spinner color
   * @default 'var(--br-primary-600)'
   */
  color?: string

  /**
   * Spinner status
   * @default 'loading'
   */
  status?: SpinnerStatus
}

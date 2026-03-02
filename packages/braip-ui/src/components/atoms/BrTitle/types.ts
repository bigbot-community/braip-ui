export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type TitleLevel = '1' | '2' | '3' | '4' | '5' | '6' | '7'
export type TitleWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type TitleAlign = 'left' | 'center' | 'right'

export interface TitleProps {
  /**
   * HTML tag to render
   * @default 'h1'
   */
  tag?: TitleTag

  /**
   * Visual level (font size)
   * @default '4'
   */
  level?: TitleLevel

  /**
   * Font weight
   * @default 'semibold'
   */
  weight?: TitleWeight

  /**
   * Text color
   * @default 'var(--neutralDarkGrey)'
   */
  color?: string

  /**
   * Text alignment
   * @default 'left'
   */
  align?: TitleAlign

  /**
   * Truncate text with ellipsis
   * @default false
   */
  truncate?: boolean

  /**
   * Max lines before truncation (line clamp)
   */
  maxLines?: number
}

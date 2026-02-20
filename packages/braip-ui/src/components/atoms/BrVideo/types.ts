export interface VideoProps {
  /**
   * Video source URL
   */
  src: string

  /**
   * Poster image URL
   */
  poster?: string

  /**
   * Video width
   */
  width?: string | number

  /**
   * Video height
   */
  height?: string | number

  /**
   * Autoplay video
   * @default false
   */
  autoplay?: boolean

  /**
   * Loop video
   * @default false
   */
  loop?: boolean

  /**
   * Mute video
   * @default false
   */
  muted?: boolean

  /**
   * Show controls
   * @default true
   */
  controls?: boolean

  /**
   * Preload strategy
   * @default 'metadata'
   */
  preload?: 'none' | 'metadata' | 'auto'

  /**
   * Border radius
   */
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl'
}

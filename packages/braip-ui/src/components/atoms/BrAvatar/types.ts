export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string

  /**
   * Alt text for the image
   */
  alt?: string

  /**
   * Initials to show when no image
   */
  initials?: string

  /**
   * Avatar size
   * @default 'md'
   */
  size?: AvatarSize

  /**
   * Avatar shape
   * @default 'circle'
   */
  shape?: AvatarShape

  /**
   * Show online status indicator
   * @default false
   */
  showStatus?: boolean

  /**
   * Status indicator
   * @default 'offline'
   */
  status?: 'online' | 'offline' | 'away' | 'busy'
}

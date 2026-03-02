export type ImageFit = "cover" | "contain" | "fill" | "none" | "scale-down";

export interface ImageProps {
  /**
   * Image source URL
   */
  src: string;

  /**
   * Alt text for accessibility
   */
  alt: string;

  /**
   * Image width
   */
  width?: string | number;

  /**
   * Image height
   */
  height?: string | number;

  /**
   * Object fit property
   * @default 'cover'
   */
  fit?: ImageFit;

  /**
   * Lazy loading
   * @default true
   */
  lazy?: boolean;

  /**
   * Show loading placeholder
   * @default true
   */
  showPlaceholder?: boolean;

  /**
   * Border radius
   */
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full";

  /**
   * Fallback image URL
   */
  fallback?: string;
}

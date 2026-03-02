export type CardVariant = "elevated" | "outlined" | "filled";
export type CardSize = "sm" | "md" | "lg";

export interface CardProps {
  /**
   * Card variant
   * @default 'elevated'
   */
  variant?: CardVariant;

  /**
   * Card padding size
   * @default 'md'
   */
  size?: CardSize;

  /**
   * Make card clickable
   * @default false
   */
  clickable?: boolean;

  /**
   * Card title
   */
  title?: string;

  /**
   * Card subtitle
   */
  subtitle?: string;

  /**
   * Card image URL
   */
  image?: string;

  /**
   * Image position
   * @default 'top'
   */
  imagePosition?: "top" | "bottom" | "left" | "right";

  /**
   * Image height
   */
  imageHeight?: string | number;

  /**
   * Disable card
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Border radius
   * @default 'md'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean;
}

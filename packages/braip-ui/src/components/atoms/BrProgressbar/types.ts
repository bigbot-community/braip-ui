export type ProgressbarSize = "xs" | "sm" | "md" | "lg";
export type ProgressbarVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface ProgressbarProps {
  /**
   * Progress value (0-100)
   * @default 0
   */
  value?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Progress bar size
   * @default 'md'
   */
  size?: ProgressbarSize;

  /**
   * Progress bar variant
   * @default 'primary'
   */
  variant?: ProgressbarVariant;

  /**
   * Show percentage label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Label position
   * @default 'right'
   */
  labelPosition?: "inside" | "right" | "top";

  /**
   * Striped style
   * @default false
   */
  striped?: boolean;

  /**
   * Animated stripes
   * @default false
   */
  animated?: boolean;

  /**
   * Indeterminate state
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Border radius
   * @default true
   */
  rounded?: boolean;
}

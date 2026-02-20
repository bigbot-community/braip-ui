export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  /**
   * Badge variant
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * Badge size
   * @default 'md'
   */
  size?: BadgeSize;

  /**
   * Fully rounded badge
   * @default false
   */
  rounded?: boolean;
}

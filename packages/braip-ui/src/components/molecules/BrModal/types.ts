export type ModalVariant = "center" | "aside";
export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  /**
   * Modal title
   */
  title?: string;

  /**
   * Modal variant
   * @default 'center'
   */
  variant?: ModalVariant;

  /**
   * Modal size
   * @default 'md'
   */
  size?: ModalSize;

  /**
   * Show close button
   * @default true
   */
  closable?: boolean;

  /**
   * Close on click outside
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Show header
   * @default true
   */
  showHeader?: boolean;

  /**
   * Show footer with default buttons
   * @default false
   */
  showFooter?: boolean;

  /**
   * Prevent closing (for confirmations)
   * @default false
   */
  persistent?: boolean;
}

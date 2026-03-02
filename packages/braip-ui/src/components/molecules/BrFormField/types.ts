export interface FormFieldProps {
  /**
   * Field label
   */
  label?: string;

  /**
   * Label position
   * @default 'top'
   */
  labelPosition?: "top" | "left" | "floating";

  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Error message
   */
  errorMessage?: string;

  /**
   * Success message
   */
  successMessage?: string;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Success state
   * @default false
   */
  success?: boolean;

  /**
   * Character count
   */
  charCount?: {
    current: number;
    max: number;
  };

  /**
   * Hint text (shows on focus)
   */
  hint?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

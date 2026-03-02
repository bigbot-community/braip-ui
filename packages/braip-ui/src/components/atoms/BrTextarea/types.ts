export type TextareaResize = "none" | "vertical" | "horizontal" | "both";

export interface TextareaProps {
  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Disable the textarea
   * @default false
   */
  disabled?: boolean;

  /**
   * Readonly state
   * @default false
   */
  readonly?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Number of visible rows
   * @default 4
   */
  rows?: number;

  /**
   * Resize behavior
   * @default 'vertical'
   */
  resize?: TextareaResize;

  /**
   * Maximum character length
   */
  maxLength?: number;
}

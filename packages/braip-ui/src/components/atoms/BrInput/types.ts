export type InputSize = "sm" | "md" | "lg";
export interface InputRangeEmits {
  (event: "input", value: number | boolean | string | null): void;
}
export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "checkbox"
  | "time";

export interface InputProps {
  /**
   * Input type
   * @default 'text'
   */
  type?: InputType;

  /**
   * Input value
   */
  value: string | number | boolean;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Disable the input
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
   * Input size
   * @default 'md'
   */
  size?: InputSize;

  /**
   * Full width input
   * @default true
   */
  block?: boolean;

  /**
   * Minimum value (for number type)
   */
  min?: number;

  /**
   * Maximum value (for number type)
   */
  max?: number;

  /**
   * Maximum length
   */
  maxLength?: number;

  /**
   * Autocomplete attribute
   */
  autocomplete?: string;
}

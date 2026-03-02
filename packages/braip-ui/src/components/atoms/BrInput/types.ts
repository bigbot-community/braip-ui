export type InputSize = "sm" | "md" | "lg";
export interface InputEmits {
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
  type?: InputType;
  value: string | number | boolean;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  size?: InputSize;
  block?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  autocomplete?: string;
}

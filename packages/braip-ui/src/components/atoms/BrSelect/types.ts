export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  /**
   * Unique identifier
   */
  id: string | number;

  /**
   * Display text
   */
  text: string;

  /**
   * Disabled option
   */
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * Available options
   */
  options?: SelectOption[];

  /**
   * Placeholder text
   * @default 'Selecione...'
   */
  placeholder?: string;

  /**
   * Disable the select
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Select size
   * @default 'md'
   */
  size?: SelectSize;

  /**
   * Enable search/filter
   * @default false
   */
  searchable?: boolean;

  /**
   * Allow clearing selection
   * @default false
   */
  clearable?: boolean;
}

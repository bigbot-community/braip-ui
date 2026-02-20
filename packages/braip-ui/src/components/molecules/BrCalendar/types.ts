export type CalendarView = "day" | "month" | "year";

export interface CalendarProps {
  /**
   * Minimum selectable date
   */
  minDate?: Date | string;

  /**
   * Maximum selectable date
   */
  maxDate?: Date | string;

  /**
   * Disabled dates
   */
  disabledDates?: Array<Date | string>;

  /**
   * Initial view
   * @default 'day'
   */
  view?: CalendarView;

  /**
   * First day of week (0 = Sunday, 1 = Monday)
   * @default 0
   */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Show week numbers
   * @default false
   */
  showWeekNumbers?: boolean;

  /**
   * Multiple selection
   * @default false
   */
  multiple?: boolean;

  /**
   * Range selection
   * @default false
   */
  range?: boolean;

  /**
   * Locale for date formatting
   * @default 'pt-BR'
   */
  locale?: string;

  /**
   * Readonly mode
   * @default false
   */
  readonly?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Highlighted dates (with custom styling)
   */
  highlightedDates?: Array<{
    date: Date | string;
    color?: string;
    label?: string;
  }>;
}

export interface CalendarRange {
  start: Date | null;
  end: Date | null;
}

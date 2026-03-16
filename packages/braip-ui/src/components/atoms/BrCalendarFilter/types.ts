export type CalendarFilterName = "Month" | "Week" | "Day";

export interface CalendarFilterOption {
  id: number;
  name: CalendarFilterName;
  translationKey: string;
}

export interface BrCalendarFilterProps {
  currentDate: string;
  bgFilter?: string;
  fontSizeFilter?: string;
  fontWeightFilter?: string;
  bgActiveFilter?: string;
}

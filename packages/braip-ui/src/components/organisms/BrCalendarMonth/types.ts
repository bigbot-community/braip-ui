export interface CalendarDay {
  date: string;
  isCurrentMonth: boolean;
}

export interface BrCalendarMonthProps {
  bgHeader?: string;
  bgCalendar?: string;
  colorCalendar?: string;
  borderColorCalendar?: string;
  bgNotCurrentMonth?: string;
  bgItem?: string;
  fontSizeItem?: string;
  colorItem?: string;
  dateSelectorColorRoot?: string;
  dateSelectorColorIndicator?: string;
  dateSelectorColorIcon?: string;
  dateSelectorFontSize?: string;
  dateSelectorFontSizeMobile?: string;
  dateSelectorFontWeight?: string;
  bgFilter?: string;
  fontSizeFilter?: string;
  fontWeightFilter?: string;
  bgActiveFilter?: string;
  initialIsDay?: boolean;
  initialIsWeek?: boolean;
  initialFilter?: string;
  items?: string[];
}

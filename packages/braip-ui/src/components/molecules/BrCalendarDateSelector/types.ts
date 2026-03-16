import type { Dayjs } from "dayjs";

export interface BrCalendarDateSelectorProps {
  currentDate: string;
  selectedDate: Dayjs | string;
  isFilter?: string;
  colorRoot?: string;
  colorIndicator?: string;
  colorIcon?: string;
  fontSizeIndicator?: string;
  fontSizeIndicatorMobile?: string;
  fontWeightIndicator?: string;
}

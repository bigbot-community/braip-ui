export interface DropdownItemProps {
  state?: "default" | "activated" | "disabled";
  text?: string;
  textColor?: string;
  isSelected?: boolean;
  isTextAssistant?: boolean;
  textAssistant?: string;
}

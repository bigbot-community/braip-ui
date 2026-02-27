export interface InputRangeProps {
  value: [number, number];
  min: number;
  max: number;
  spacing: number;
  height: string;
  padding: string;
  colorInput: string;
  borderColor: string;
  text: string;
  textColor: string;
  textFontSize: string;
  textValueFontSize: string;
}

export interface InputRangeEmits {
  (event: "input", value: [number, number]): void;
}

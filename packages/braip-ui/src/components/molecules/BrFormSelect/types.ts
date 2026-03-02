export interface IOptionType {
  value: string;
  label: string;
  state?: string;
}

export interface FormSelectProps {
  label?: string;
  typeLabel?: "default" | "dark";
  preSelectedOption?: IOptionType;
  options?: IOptionType[];
  message?: string | null;
  messageError?: string;
  isRequired?: boolean;
  scrollAmmount?: number;
}

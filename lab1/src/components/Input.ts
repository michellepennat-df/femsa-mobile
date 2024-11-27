type InputValue = string | number;

export interface InputProps {
  value: InputValue;
  onChange: (value: InputValue) => void;
  placeholder?: string;
}

export type InputError = { errorType: "InputFieldError"; message: string };

export const Input = ({
  value,
  onChange,
  placeholder = "",
}: InputProps): string => {
  onChange(value);
  const isValidInput = (val: unknown): val is InputValue =>
    typeof val === "string" || typeof val === "number";

  if (!isValidInput(value)) throw new Error("Invalid input value");
  return `InputField value: ${value}, placeholder: ${placeholder}`;
};

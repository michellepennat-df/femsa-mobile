interface ButtonProps<T> {
  label: string;
  value: T;
  onClick?: (event: T) => void;
  disabled?: boolean;
}

export type ButtonError = { errorType: "ButtonError"; message: string };

export const Button = <T extends unknown>({
  label,
  value,
  onClick,
  disabled = false,
}: ButtonProps<T>): string => {
  if (disabled) return `Button [${label}] is disabled.`;
  onClick?.(value);
  return `Button [${label}] clicked with value: ${value}`;
};

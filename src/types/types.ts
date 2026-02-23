import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
export type Props = { children: ReactNode };

export type LoginValues = {
  username: string;
  password: string;
};
export type CustomButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "default";
  children: ReactNode;
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export type CustomInputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type Token = {
  accessToken: string;
};

export type LoginFormError = {
  usernameError: string;
  passwordError: string;
};

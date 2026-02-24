import type {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
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
export type SidebarProps = {
  toggleSidebar: boolean;
  setToggleSidebar: Dispatch<SetStateAction<boolean>>;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  __v: number;

  name: {
    firstname: string;
    lastname: string;
  };

  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;

    geolocation: {
      lat: string;
      long: string;
    };
  };
};

export type CardsProps = {
  name: string;
  number: number;
  icon: ReactNode;
};

import type { JSX } from "react";
//utilities
import clsx from "clsx";
//types
import type { CustomButtonProps } from "../../types/types";

const CustomButton = ({
  children,
  variant = "default",
  ...props
}: CustomButtonProps): JSX.Element => {
  const primaryClass = `btn-${variant}`;
  const buttonClass = clsx("btn", primaryClass);
  return (
    <div className="btn-group">
      <button className={buttonClass} {...props}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;

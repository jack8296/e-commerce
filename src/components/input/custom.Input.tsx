import { useState, useCallback } from "react";
import type { JSX } from "react";
//icons
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const CustomInput = ({
  label,
  type = "text",
  ...others
}: {
  label: string;
  type: string;
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [showPassword]);
  return (
    <div className="input-group">
      <input
        type={type === "password" && showPassword ? "text" : type}
        id="custom-input"
        className="custom-input"
        {...others}
      />
      <label htmlFor="custom-input">{label}</label>
      {type === "password" && (
        <span className="input-icon" onClick={togglePasswordVisibility}>
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </span>
      )}
    </div>
  );
};

export default CustomInput;

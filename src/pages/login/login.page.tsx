import { useState, useCallback } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
//types
import type { LoginValues } from "../../types/types";

const LoginPage = () => {
  const [formValues, setFormValues] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [formValues],
  );

  console.log(formValues);

  return (
    <div className="login-page">
      <div className="login-container">
        <form>
          <h2>Login Form</h2>
          <div className="email-input">
            <CustomInput
              label="Email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="password-input">
            <CustomInput
              label="Password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

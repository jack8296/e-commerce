import { useState, useCallback } from "react";
//redux-toolkit
import { useDispatch } from "react-redux";
//react query
import { useMutation } from "@tanstack/react-query";
//components
import CustomInput from "../../components/input/custom.Input";
import CustomButton from "../../components/button/custm.button";
//types
import type { LoginValues, LoginFormError } from "../../types/types";
//icons
import { IoLogInOutline } from "react-icons/io5";
//services
import { Login } from "../../services/auth/auth.service";
//features
import { setToken } from "../../features/auth/auth.slicer";
//helpers
import { setItem } from "../../helpers/localStorage.helper";
//toast
import { toast } from "react-toastify";

const LoginPage = () => {
  const [formValues, setFormValues] = useState<LoginValues>({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const { mutate, isPending } = useMutation<
    { token: string },
    Error,
    LoginValues
  >({
    mutationFn: Login as (data: LoginValues) => Promise<{ token: string }>,
    onSuccess: (response) => {
      dispatch(setToken(response.token));
      setItem(response.token);
      toast.success("Product add successful!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const { username, password } = formValues;
      if (!username) {
        toast.error("Username is required");
        return;
      }
      if (!password) {
        toast.error("Password is required");
        return;
      }
      mutate(formValues);
    },
    [formValues, mutate],
  );

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Login Form</h2>
          <div className="email-input">
            <CustomInput
              label="Username"
              type="text"
              name="username"
              value={formValues.username}
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
          <div className="action">
            <CustomButton
              variant="secondary"
              type="submit"
              disabled={isPending}
            >
              <div className="title">Login</div>
              <div className="icon">
                <IoLogInOutline />
              </div>
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

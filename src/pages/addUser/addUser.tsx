import type { JSX } from "react";
import { useState, useCallback } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import CustomButton from "../../components/button/custm.button";
//icons
import { FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
//types
import type { AddUserValues } from "../../types/types";
//react-query
import { useMutation } from "@tanstack/react-query";
//services
import { AddSingleUser } from "../../services/user/user.service";
//toast
import { toast } from "react-toastify";
//react-router
import { useNavigate } from "react-router";

const AddUser = (): JSX.Element => {
  const [addUserValues, setAddUserValues] = useState<AddUserValues>({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handlChangeValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAddUserValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const { mutate, isPending } = useMutation({
    mutationFn: (values: AddUserValues) => AddSingleUser(values),
    onSuccess: () => {
      toast.success("User added succesfully");
    },
    onError: (error) => {
      toast.error("Failed to add user");
    },
  });
  const handleSubmitData = useCallback(() => {
    const { username, email, password } = addUserValues;
    if (username === "" || email === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 1000),
      ...addUserValues,
    };
    mutate(data);
  }, [addUserValues, mutate]);

  const handleCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className="addUser-container">
      <h1 className="addUser-title">Add User</h1>
      <div className="addUser-form">
        <div className="addUser-form__input">
          <CustomInput
            label="Name"
            type="text"
            name="username"
            value={addUserValues.username}
            onChange={handlChangeValues}
          />
        </div>
        <div className="addUser-form__input">
          <CustomInput
            label="Email"
            type="email"
            name="email"
            value={addUserValues.email}
            onChange={handlChangeValues}
          />
        </div>
        <div className="addUser-form__input">
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={addUserValues.password}
            onChange={handlChangeValues}
          />
        </div>
        <div className="addUser-form-action">
          <div className="addUser-form-action__cancel">
            <CustomButton variant="danger" type="button" onClick={handleCancel}>
              <span className="title">Cancel</span>
              <span className="icon">
                <ImCross />
              </span>
            </CustomButton>
          </div>
          <div className="addUser-form-action__submit">
            <CustomButton
              variant="secondary"
              type="submit"
              onClick={handleSubmitData}
            >
              <span className="title">Add User</span>
              <span className="icon">
                <FaSave />
              </span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

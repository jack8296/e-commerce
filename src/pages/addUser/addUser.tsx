import type { JSX } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import CustomButton from "../../components/button/custm.button";
//icons
import { FaSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const AddUser = (): JSX.Element => {
  return (
    <div className="addUser-container">
      <h1 className="addUser-title">Add User</h1>
      <div className="addUser-form">
        <div className="addUser-form__input">
          <CustomInput
            label="Name"
            type="text"
            name="username"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="addUser-form__input">
          <CustomInput
            label="Email"
            type="email"
            name="email"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="addUser-form__input">
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="addUser-form-action">
          <div className="addUser-form-action__cancel">
            <CustomButton variant="danger" type="button">
              <span className="title">Cancel</span>
              <span className="icon">
                <ImCross />
              </span>
            </CustomButton>
          </div>
          <div className="addUser-form-action__submit">
            <CustomButton variant="secondary" type="submit">
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

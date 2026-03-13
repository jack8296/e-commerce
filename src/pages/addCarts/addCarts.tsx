import type { JSX } from "react";
import { useCallback, useState } from "react";
//components
import CustomButton from "../../components/button/custm.button";
import CustomInput from "../../components/input/custom.Input";
import TextArea from "../../components/textArea/textArea";
//react-router
import { useNavigate } from "react-router";
//icons
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";
//types
import { type AddCartsValues } from "../../types/types";

const AddCarts = (): JSX.Element => {
  const [addCartsValues, setAddCartsValues] = useState<AddCartsValues>({
    title: "",
    price: 0,
    category: "",
    image: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setAddCartsValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  console.log("value", addCartsValues);

  return (
    <div className="addCarts-container">
      <h2>Add Carts</h2>
      <div className="forms">
        <div className="form-top-section">
          <CustomInput
            label="Title"
            type="text"
            name="title"
            value={addCartsValues.title}
            onChange={handleChangeValue}
          />
          <CustomInput
            label="Price"
            type="number"
            name="price"
            value={addCartsValues.price.toString()}
            onChange={handleChangeValue}
          />
        </div>
        <div className="form-bottom-section">
          <CustomInput
            label="Category"
            type="text"
            name="category"
            value={addCartsValues.category}
            onChange={handleChangeValue}
          />
          <CustomInput
            label="Image URL"
            type="text"
            name="image"
            value={addCartsValues.image}
            onChange={handleChangeValue}
          />
        </div>
        <div className="form-textarea">
          <TextArea
            name="description"
            placeHolder="Description goes here..."
            value={addCartsValues.description}
            onChange={handleChangeValue}
          />
        </div>
        <div className="form-action">
          <div className="form-action__cancel">
            <CustomButton
              variant="danger"
              type="submit"
              onClick={() => navigate("/")}
            >
              <div className="title">Cancel</div>
              <div className="icon">
                <ImCross />
              </div>
            </CustomButton>
          </div>
          <div className="form-action__submit" onClick={() => {}}>
            <CustomButton variant="secondary" type="submit">
              <div className="title">Submit</div>
              <div className="icon">
                <FaSave />
              </div>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarts;

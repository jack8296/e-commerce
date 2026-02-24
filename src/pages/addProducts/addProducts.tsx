import type { JSX } from "react";
import React, { useState, useCallback } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import CustomButton from "../../components/button/custm.button";
import TextArea from "../../components/textArea/textArea";
//icons
import { CiHome } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";

//types
import type { ProductsValues } from "../../types/types";
const AddProducts = (): JSX.Element => {
  const [addProductsValues, setAddProductsValues] = useState<ProductsValues>({
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const handleProductValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setAddProductsValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  return (
    <div className="addProducts-container">
      <h2>Add Products</h2>
      <div className="forms">
        <div className="form-top-section">
          <CustomInput
            label="Title"
            type="text"
            name="title"
            value={addProductsValues?.title}
            onChange={handleProductValues}
          />
          <CustomInput
            label="Price"
            type="number"
            name="price"
            value={addProductsValues?.price}
            onChange={handleProductValues}
          />
        </div>
        <div className="form-bottom-section">
          <CustomInput
            label="Category"
            type="text"
            name="category"
            value={addProductsValues?.category}
            onChange={handleProductValues}
          />
          <CustomInput
            label="Image URL"
            type="text"
            name="image"
            value={addProductsValues?.image}
            onChange={handleProductValues}
          />
        </div>
        <div className="form-textarea">
          <TextArea
            name="description"
            placeHolder="Description goes here..."
            value={addProductsValues?.description}
            onChange={handleProductValues}
          />
        </div>
        <div className="form-action">
          <div className="form-action__cancel">
            <CustomButton variant="danger" type="submit">
              <div className="title">Cancel</div>
              <div className="icon">
                <ImCross />
              </div>
            </CustomButton>
          </div>
          <div className="form-action__submit">
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

export default AddProducts;

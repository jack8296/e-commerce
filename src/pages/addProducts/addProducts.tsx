import type { JSX } from "react";
//components
import CustomInput from "../../components/input/custom.Input";
import CustomButton from "../../components/button/custm.button";
import TextArea from "../../components/textArea/textArea";
//icons
import { CiHome } from "react-icons/ci";
const AddProducts = (): JSX.Element => {
  return (
    <div className="addProducts-container">
      <h2>Add Products</h2>
      <div className="forms">
        <div className="form-top-section">
          <CustomInput
            label="Title"
            type="text"
            name="title"
            value=""
            onChange={() => {}}
          />
          <CustomInput
            label="Price"
            type="number"
            name="price"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="form-bottom-section">
          <CustomInput
            label="Category"
            type="text"
            name="category"
            value=""
            onChange={() => {}}
          />
          <CustomInput
            label="Image URL"
            type="text"
            name="image"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="form-textarea">
          <TextArea />
        </div>
        <div className="form-action">
          <div className="form-action__submit">
            <CustomButton variant="secondary" type="submit">
              <div className="title">Submit</div>
              <div className="icon">
                <CiHome />
              </div>
            </CustomButton>
          </div>
          <div className="form-action__cancel">
            <CustomButton variant="danger" type="submit">
              <div className="title">Cancel</div>
              <div className="icon">
                <CiHome />
              </div>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

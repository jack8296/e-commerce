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
import { type AddCartsValues, type AddCartResponse } from "../../types/types";
//services
import { addCarts } from "../../services/carts/cart.service";
//react-query
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
//toast

const AddCarts = (): JSX.Element => {
  const [addCartsValues, setAddCartsValues] = useState<AddCartsValues>({
    id: Math.floor(Math.random() * 1000),
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

  const { mutate: addCartMutate, isPending: isAddCartPending } = useMutation({
    mutationFn: (body: AddCartResponse) => addCarts(body),
    onSuccess: () => {
      toast.success("successfully added!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const addCartFn = useCallback(() => {
    const { title, category, description, price, image } = addCartsValues;
    const body: AddCartResponse = {
      id: Math.floor(Math.random() * 1000),
      userId: 1,
      products: [],
    };
    if (body.products.length === 0) {
      body.products.push({ ...addCartsValues });
    }
    if (
      title === "" ||
      category === "" ||
      description === "" ||
      !price ||
      image === ""
    ) {
      toast.error("Please fill al the fields");
      return;
    }
    addCartMutate(body);
  }, [addCartsValues]);
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
          <div className="form-action__submit" onClick={addCartFn}>
            <CustomButton
              variant="secondary"
              type="submit"
              disabled={isAddCartPending}
            >
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

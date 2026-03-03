//types
import { type TableProps, type EditProductValues } from "../../types/types";
//helpers
import { isValidUrl } from "../../helpers/urlCheck";
//icons
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

//components
import Select from "../select/select";
import DeleteModal from "../modal/delete/deleteModal";
import CustomButton from "../button/custm.button";
import { useCallback, useState } from "react";
import CustomInput from "../input/custom.Input";
import TextArea from "../textArea/textArea";
//services
import { updateProducts } from "../../services/products/products";
//react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "../../app/query/queryClient";
import { toast } from "react-toastify";

function Table<T extends object>({ data }: TableProps<T>) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [editProductValues, setEditProductValues] = useState<EditProductValues>(
    {
      id: 0,
      title: "",
      price: 0,
      category: "",
      image: "",
      description: "",
      rating: { rate: 0 },
    },
  );
  const paginationOptions = [];
  const queryClient = useQueryClient();

  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }
  const handleOpenDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, [isDeleteModalOpen]);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, [isDeleteModalOpen]);

  const handleOpenUpdateModal = useCallback(
    (data: EditProductValues) => {
      setEditProductValues({
        id: data.id,
        title: data.title,
        price: data.price,
        category: data.category,
        image: data.image,
        description: data.description,
        rating: data.rating ?? { rate: 0 },
      });
      setIsUpdateModalOpen(true);
    },
    [isUpdateModalOpen],
  );

  const handleCloseUpdateModal = useCallback(() => {
    setIsUpdateModalOpen(false);
  }, [isUpdateModalOpen]);

  const handleEditProductValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      console.log(name);
      if (name === "rating") {
        setEditProductValues((prev) => ({
          ...prev,
          rating: {
            rate: Number(value),
          },
        }));
      } else {
        setEditProductValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    [],
  );

  for (let i = 4; i <= data.length; i += 4) {
    paginationOptions.push(String(i));
  }
  const { mutate: updateProduct } = useMutation({
    mutationFn: updateProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully");
      setIsUpdateModalOpen(false);
    },
  });

  const handleUpdateProduct = useCallback(() => {
    const { title, price, category, image, description, id } =
      editProductValues;
    const data = {
      id,
      title,
      price: String(price),
      category,
      image,
      description,
    };
    updateProduct(data);
  }, [editProductValues, updateProduct]);
  return (
    <>
      <DeleteModal
        title="Are you sure you want to delete this product?"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      >
        <div className="delete-action">
          <CustomButton
            variant="danger"
            type="submit"
            onClick={handleCloseDeleteModal}
          >
            <div className="title">Cancel</div>
            <div className="icon">
              <MdOutlineCancel />
            </div>
          </CustomButton>
          <CustomButton variant="secondary" type="submit" onClick={() => {}}>
            <div className="title">Delete</div>
            <div className="icon">
              <MdDeleteOutline />
            </div>
          </CustomButton>
        </div>
      </DeleteModal>
      <DeleteModal
        title="Are you sure you want to update this product? "
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
      >
        <form className="edit-form">
          <div className="edit-form-input-section">
            <CustomInput
              label="Title"
              type="text"
              name="title"
              value={editProductValues?.title}
              onChange={handleEditProductValues}
            />
          </div>
          <div className="edit-form-input-section">
            <CustomInput
              label="Price"
              type="number"
              name="price"
              value={String(editProductValues?.price)}
              onChange={handleEditProductValues}
            />
          </div>
          <div className="edit-form-input-section">
            <CustomInput
              label="Category"
              type="text"
              name="category"
              value={editProductValues?.category}
              onChange={handleEditProductValues}
            />
          </div>
          <div className="edit-form-input-section">
            <CustomInput
              label="Rating"
              type="number"
              name="rating"
              value={String(editProductValues?.rating?.rate)}
              onChange={handleEditProductValues}
            />
          </div>
          <div className="edit-form-des">
            <TextArea
              name="description"
              placeHolder="Description goes here..."
              value={editProductValues?.description}
              onChange={handleEditProductValues}
            />
          </div>
        </form>
        <div className="edit-action">
          <CustomButton
            variant="danger"
            type="submit"
            onClick={handleCloseUpdateModal}
          >
            <div className="title">Cancel</div>
            <div className="icon">
              <MdOutlineCancel />
            </div>
          </CustomButton>
          <CustomButton
            variant="secondary"
            type="submit"
            onClick={handleUpdateProduct}
          >
            <div className="title">Update</div>
            <div className="icon">
              <MdDeleteOutline />
            </div>
          </CustomButton>
        </div>
      </DeleteModal>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => {
                    if (typeof value === "object" && value !== null) {
                      return <td key={idx}>{value?.rate}</td>;
                    } else if (isValidUrl(value)) {
                      return (
                        <td key={idx}>
                          <img
                            src={value}
                            alt="Image"
                            className="table-image"
                          />
                        </td>
                      );
                    } else {
                      return <td key={idx}>{value}</td>;
                    }
                  })}
                  <td className="table-action">
                    <div className="action-wrapper">
                      <div
                        className="table-edit"
                        onClick={() =>
                          handleOpenUpdateModal(row as EditProductValues)
                        }
                      >
                        <FaEdit />
                      </div>
                      <div
                        className="table-delete"
                        onClick={handleOpenDeleteModal}
                      >
                        <MdDeleteForever />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="table-pagination">
          <Select
            onChange={() => {}}
            data={paginationOptions}
            name="price"
            placeHolder="Select number of rows"
          />
        </div>
      </div>
    </>
  );
}

export default Table;

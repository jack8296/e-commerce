//types
import { type TableProps } from "../../types/types";
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

function Table<T extends object>({ data }: TableProps<T>) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }
  const handleOpenDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, [isDeleteModalOpen]);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, [isDeleteModalOpen]);

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
                      <div className="table-edit">
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
            data={["4", "7", "10", "15", "20"]}
            name="price"
            placeHolder="Select number of rows"
          />
        </div>
      </div>
    </>
  );
}

export default Table;

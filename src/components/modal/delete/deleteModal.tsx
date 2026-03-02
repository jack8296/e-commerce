import { useCallback, type JSX } from "react";
//icons
import { MdOutlineCancel } from "react-icons/md";
//types
import type { DeleteModalProps } from "../../../types/types";
//utils
import clsx from "clsx";
const DeleteModal = ({
  title,
  isOpen,
  setIsOpen,
  children,
}: DeleteModalProps): JSX.Element => {
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className={clsx("delete-modal-container", isOpen && "active")}>
      <div className="delete-modal-overlay"></div>
      <div className="delete-modal-content">
        <div className="delete-modal-content__icon" onClick={handleCloseModal}>
          <MdOutlineCancel />
        </div>
        <div className="main-content">
          <h2>{title}</h2>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

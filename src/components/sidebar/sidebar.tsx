import { useCallback, type JSX } from "react";
//icons
import { FaShoppingBag } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
//types
import { type SidebarProps } from "../../types/types";

const Sidebar = ({
  setToggleSidebar,
  toggleSidebar,
}: SidebarProps): JSX.Element => {
  const handleClose = useCallback(() => {
    setToggleSidebar((prev) => !prev);
  }, [setToggleSidebar]);
  return (
    <div className="sidebar-container">
      <div className="sidebar-main">
        <div className="close-action" onClick={handleClose}>
          {toggleSidebar ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </div>
        <ul className="lists">
          <li className="item">
            <div className="icon">
              <CiHome />
            </div>
            <div className="title">Products</div>
          </li>
          <li className="item">
            <div className="icon">
              <FaShoppingBag />
            </div>
            <div className="title">Carts</div>
          </li>
          <li className="item">
            <div className="icon">
              <CiUser />
            </div>
            <div className="title">Users</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

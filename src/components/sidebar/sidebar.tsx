import { useCallback, useState, type JSX } from "react";
//icons
import { FaShoppingBag } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";

//types
import { type SidebarProps } from "../../types/types";

//react-router
import { Link } from "react-router";

const Sidebar = ({
  setToggleSidebar,
  toggleSidebar,
}: SidebarProps): JSX.Element => {
  const [sidebarName, setSidebarName] = useState<string>("");

  const handleClose = useCallback(() => {
    setToggleSidebar((prev) => !prev);
    setSidebarName("");
  }, [setToggleSidebar]);

  const handleOpenSidebar = useCallback((name: string) => {
    setSidebarName((prev) => (prev === name ? "" : name));
    setToggleSidebar(false);
  }, []);
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
          <div className="sidebar-dropdown">
            <li className="item" onClick={() => handleOpenSidebar("products")}>
              <div className="icon">
                <CiHome />
              </div>
              <div className="title">Products</div>
              <div className="arrow-icon">
                <IoIosArrowUp />
              </div>
            </li>
            <div
              className={`sidebar-dropdown-list ${sidebarName === "products" ? "active" : ""} `}
            >
              <ul className="dropdown-list">
                <Link to="/products/add">
                  <li>
                    <div className="icon">
                      <IoBagAddOutline />
                    </div>
                    <div className="title">Add products</div>
                  </li>
                </Link>
                <Link to="/products">
                  <li>
                    <div className="icon">
                      <CiHome />
                    </div>
                    <div className="title">Products</div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="sidebar-dropdown">
            <li className="item" onClick={() => handleOpenSidebar("carts")}>
              <div className="icon">
                <FaShoppingBag />
              </div>
              <div className="title">Carts</div>
              <div className="arrow-icon">
                <IoIosArrowUp />
              </div>
            </li>
            <div
              className={`sidebar-dropdown-list ${sidebarName === "carts" ? "active" : ""} `}
            >
              <ul className="dropdown-list">
                <Link to="/carts/add">
                  <li>
                    <div className="icon">
                      <IoBagAddOutline />
                    </div>
                    <div className="title">Add Carts</div>
                  </li>
                </Link>
                <Link to="/carts">
                  <li>
                    <div className="icon">
                      <CiHome />
                    </div>
                    <div className="title">Carts</div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="sidebar-dropdown">
            <li className="item" onClick={() => handleOpenSidebar("users")}>
              <div className="icon">
                <CiUser />
              </div>
              <div className="title">Users</div>
              <div className="arrow-icon">
                <IoIosArrowUp />
              </div>
            </li>
            <div
              className={`sidebar-dropdown-list ${sidebarName === "users" ? "active" : ""} `}
            >
              <ul className="dropdown-list">
                <Link to="/users/add">
                  <li>
                    <div className="icon">
                      <IoBagAddOutline />
                    </div>
                    <div className="title">Add Users</div>
                  </li>
                </Link>
                <Link to="/users">
                  <li>
                    <div className="icon">
                      <CiHome />
                    </div>
                    <div className="title">Users</div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

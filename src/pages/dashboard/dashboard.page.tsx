import { useState, type JSX } from "react";
//components
import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar";
//utilities
import clsx from "clsx";
//react-router
import { Outlet } from "react-router";

const Dashboardpage = (): JSX.Element => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const activeToggleClass = toggleSidebar ? "active" : "";
  const combineClass = clsx("main-page-content", activeToggleClass);
  return (
    <div className="dashboard-page">
      <Header />
      <div className={combineClass}>
        <Sidebar
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
        <div className="page-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;

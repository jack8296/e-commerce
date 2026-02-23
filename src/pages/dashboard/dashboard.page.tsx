import type { JSX } from "react";
//components
import Header from "../../components/header/header.component";

const Dashboardpage = (): JSX.Element => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <Header />
      </div>
      <div className="main-page-content">
        <div className="page-sidebar">I am side bar</div>
        <div className="page-main">I am main page</div>
      </div>
    </div>
  );
};

export default Dashboardpage;

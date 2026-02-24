import type { JSX } from "react";
//images
import logo from "../../assets/1.jpg";
const Header = (): JSX.Element => {
  return (
    <nav className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="username">N</div>
    </nav>
  );
};

export default Header;

import type { JSX } from "react";
//images
import logo from "../../assets/1.jpg";
//react-query
import { useQuery } from "@tanstack/react-query";
//servies
import { SingleUser } from "../../services/user/user.service";

const Header = (): JSX.Element => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", 1],
    queryFn: () => SingleUser(1),
  });
  if (error) {
    return <div className="error">{error.message}</div>;
  }
  return (
    <nav className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="username">
        {isLoading
          ? "..."
          : data?.name?.firstname.charAt(0).toLocaleUpperCase()}
      </div>
    </nav>
  );
};

export default Header;

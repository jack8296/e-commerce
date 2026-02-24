import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//routes
import { PrivateRoute } from "../privateRoute/privateRoute";
import { PublicRoute } from "../publicRoute/publicRoute";
//pages
import LoginPage from "../../pages/login/login.page";
import Dashboardpage from "../../pages/dashboard/dashboard.page";
import AddProducts from "../../pages/addProducts/addProducts";
import Products from "../../pages/products/products";
import AddUser from "../../pages/addUser/addUser";
import Users from "../../pages/users/users";
import AddCarts from "../../pages/addCarts/addCarts";
import Carts from "../../pages/carts/carts";
//componetns
import Display from "../../components/display/display";
const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Dashboardpage />,
        children: [
          { index: true, element: <Display /> },
          { path: "/products/add", element: <AddProducts /> },
          { path: "/products", element: <Products /> },
          { path: "/users", element: <Users /> },
          { path: "/users/add", element: <AddUser /> },
          { path: "/carts/add", element: <AddCarts /> },
          { path: "/carts", element: <Carts /> },
        ],
      },
    ],
  },
]);

const CustomRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouterProvider;

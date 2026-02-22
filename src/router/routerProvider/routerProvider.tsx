import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//pages
import LoginPage from "../../pages/login/login.page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const CustomRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouterProvider;

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//routes
import { PrivateRoute } from "../privateRoute/privateRoute";
import { PublicRoute } from "../publicRoute/publicRoute";
//pages
import LoginPage from "../../pages/login/login.page";
import Dashboardpage from "../../pages/dashboard/dashboard.page";

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
      },
    ],
  },
]);

const CustomRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouterProvider;

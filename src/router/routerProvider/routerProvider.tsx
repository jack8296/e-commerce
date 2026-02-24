import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//routes
import { PrivateRoute } from "../privateRoute/privateRoute";
import { PublicRoute } from "../publicRoute/publicRoute";
//pages
import LoginPage from "../../pages/login/login.page";
import Dashboardpage from "../../pages/dashboard/dashboard.page";
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
          { path: "/products", element: <h1>I am productpage</h1> },
        ],
      },
    ],
  },
]);

const CustomRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouterProvider;

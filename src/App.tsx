import CustomRouterProvider from "./router/routerProvider/routerProvider";
//toast
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CustomRouterProvider />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
      />
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
//redux-toolkit-config
import { store } from "./app/store/store.ts";
import { Provider } from "react-redux";
import { CustomQueryClientProvider } from "./app/query/queryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomQueryClientProvider>
        <App />
      </CustomQueryClientProvider>
    </Provider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApplicationRoutes } from "./presentation/shared/application-routes";
import { Provider } from "react-redux";
import { store } from "./infrastructure/store";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ApplicationRoutes />
        </Provider>
    </StrictMode>
);
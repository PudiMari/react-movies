import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApplicationRoutes } from "./presentation/shared/application-routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./infrastructure/store/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000 // 30 segundos
        }
    }
});
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ApplicationRoutes />
            </Provider>
        </QueryClientProvider>
    </StrictMode>
);

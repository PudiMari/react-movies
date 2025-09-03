import { configureStore } from "@reduxjs/toolkit";
import favs from "./features/favs";
export const store = configureStore({
    reducer: {
        favs
    }
})

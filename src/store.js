import { configureStore } from "@reduxjs/toolkit";
import markedReducer from "./features/markedDown";

export default configureStore({
    reducer: {
        marked: markedReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Slice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})
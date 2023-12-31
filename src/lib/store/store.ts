import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slice/counterslice";
import { type } from "os";
export const store = configureStore({
    reducer: {},
});
 export type Rootstate = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
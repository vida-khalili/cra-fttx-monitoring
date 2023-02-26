import { configureStore } from "@reduxjs/toolkit";
import { craApiSlice } from "src/features/craApiSlice";
import appSlice from "src/features/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    [craApiSlice.reducerPath]: craApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(craApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

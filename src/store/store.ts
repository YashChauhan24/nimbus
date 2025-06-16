import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "./slices/tradeSlice";
import appReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    trade: tradeReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

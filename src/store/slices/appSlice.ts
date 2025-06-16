import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../types";

const initialState: AppState = {
  darkMode: false,
  walletConnected: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.walletConnected = action.payload;
    },
  },
});

export const { toggleDarkMode, setWalletConnected } = appSlice.actions;
export default appSlice.reducer;

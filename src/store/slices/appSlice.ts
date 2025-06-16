import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../types";

// Get initial theme from document
const getInitialTheme = (): boolean => {
  const savedTheme = document.body.getAttribute("theme");
  return savedTheme === "dark";
};

const initialState: AppState = {
  darkMode: getInitialTheme(),
  walletConnected: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const newTheme = !state.darkMode;
      state.darkMode = newTheme;
      document.body.setAttribute("theme", newTheme ? "dark" : "light");
    },
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.walletConnected = action.payload;
    },
  },
});

export const { toggleDarkMode, setWalletConnected } = appSlice.actions;
export default appSlice.reducer;

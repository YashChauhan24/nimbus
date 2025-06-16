import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Token, TradeState } from "../../types";

const initialState: TradeState = {
  isBuyMode: true,
  amount: "",
  slippage: 0.5,
  selectedToken: null,
};

const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {
    setIsBuyMode: (state, action: PayloadAction<boolean>) => {
      state.isBuyMode = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setSlippage: (state, action: PayloadAction<number>) => {
      state.slippage = action.payload;
    },
    setSelectedToken: (state, action: PayloadAction<Token | null>) => {
      state.selectedToken = action.payload;
    },
  },
});

export const { setIsBuyMode, setAmount, setSlippage, setSelectedToken } =
  tradeSlice.actions;
export default tradeSlice.reducer;

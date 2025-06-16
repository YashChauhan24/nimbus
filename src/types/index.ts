export interface Token {
  symbol: string;
  name: string;
  age: string;
}

export interface TradeState {
  isBuyMode: boolean;
  amount: string;
  slippage: number;
  selectedToken: Token | null;
}

export interface AppState {
  darkMode: boolean;
  walletConnected: boolean;
}

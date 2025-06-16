import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { RecentlyAdded } from "./components/RecentlyAdded";
import { TradeBox } from "./components/TradeBox";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { tokenApi } from "./services/api";
import { toggleDarkMode, setWalletConnected } from "./store/slices/appSlice";
import {
  setIsBuyMode,
  setAmount,
  setSlippage,
  setSelectedToken,
} from "./store/slices/tradeSlice";
import type { Token } from "./types";

interface TokensResponse {
  tokens: Token[];
  total: number;
}

interface PriceResponse {
  price: string;
}

const ITEMS_PER_PAGE = 15;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  // Redux state
  const { isBuyMode, amount, slippage } = useAppSelector(
    (state) => state.trade
  );
  const { walletConnected } = useAppSelector((state) => state.app);

  // Fetch tokens using React Query
  const { data: tokensData, isLoading } = useQuery({
    queryKey: ["tokens", currentPage],
    queryFn: () => tokenApi.getRecentTokens(currentPage, ITEMS_PER_PAGE),
  });

  // Fetch price when amount changes
  const { data: priceData } = useQuery({
    queryKey: ["price", amount],
    queryFn: () => tokenApi.getTokenPrice("TOKEN", amount),
    enabled: !!amount,
  });

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleConnectWallet = () => {
    dispatch(setWalletConnected(true));
  };

  const handleTokenSelect = (token: Token) => {
    dispatch(setSelectedToken(token));
  };

  const handleTradeSubmit = () => {
    if (!walletConnected) {
      // Show wallet connection prompt
      return;
    }
    console.log("Submit trade", { amount, isBuyMode });
  };

  const handleAmountChange = (value: number) => {
    dispatch(setAmount(value.toString()));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const tokens = tokensData?.tokens ?? [];
  const totalTokens = tokensData?.total ?? 0;
  const receiveAmount = priceData?.price ?? "0";

  return (
    <>
      <Header
        onDarkModeToggle={handleDarkModeToggle}
        onConnectWallet={handleConnectWallet}
      />

      <main className="flex flex-col items-center min-h-screen p-4 md:p-10 bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto items-start h-auto md:h-[750px]">
          {/* Sidebar with Recently Added */}
          <div className="w-full md:w-[340px] h-[500px] md:h-full">
            <RecentlyAdded
              tokens={tokens}
              onTokenSelect={handleTokenSelect}
              currentPage={currentPage}
              totalPages={Math.ceil(totalTokens / ITEMS_PER_PAGE)}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Main Trading Area */}
          <div className="flex-1 h-auto">
            <TradeBox
              isBuyMode={isBuyMode}
              onModeChange={(value) => dispatch(setIsBuyMode(value))}
              amount={amount}
              onAmountChange={handleAmountChange}
              receiveAmount={receiveAmount}
              slippage={slippage}
              onSlippageChange={(value) => dispatch(setSlippage(value))}
              onSubmit={handleTradeSubmit}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

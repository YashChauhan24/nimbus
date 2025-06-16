import { SlippageSettings } from "./SlippageSettings";

interface TradeBoxProps {
  isBuyMode: boolean;
  onModeChange: (isBuy: boolean) => void;
  onAmountChange: (amount: number) => void;
  amount: string;
  receiveAmount: string;
  slippage: number;
  onSlippageChange: (value: number) => void;
  onSubmit: () => void;
}

export const TradeBox = ({
  isBuyMode,
  onModeChange,
  onAmountChange,
  amount,
  receiveAmount,
  slippage,
  onSlippageChange,
  onSubmit,
}: TradeBoxProps) => {
  const quickAmounts = [0.5, 1, 2, 5, 10];

  return (
    <div className="w-full max-w-md rounded-3xl border-2 shadow-2xl px-2 py-4 flex flex-col gap-3">
      <div className="w-full">
        <label
          className="block text-base md:text-xl font-bold mb-4 text-center"
          htmlFor="token-search"
        >
          Paste ca or search by name/symbol
        </label>
        <input
          id="token-search"
          className="w-full px-4 py-2 rounded-2xl outline-none border-2 transition"
          type="text"
          placeholder="0x96f4A78c19a273D95fB082800911dB66648b0670"
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <div className="flex mb-3">
        <button
          onClick={() => onModeChange(true)}
          className={`flex-1 py-2 border-2 font-bold rounded-l-2xl text-sm ${
            isBuyMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => onModeChange(false)}
          className={`flex-1 py-2 border-2 border-l-0 font-bold rounded-r-2xl text-sm ${
            !isBuyMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Sell
        </button>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-1 text-sm">
          <span className="font-bold">AMOUNT</span>
          <span className="ml-2">AVAX</span>
        </div>
        <div className="flex items-center rounded-2xl border-2 transition">
          <input
            type="number"
            placeholder="0"
            min={0}
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            className="flex-1 rounded-2xl outline-none text-sm font-mono px-3 py-2 transition"
            inputMode="decimal"
          />
        </div>
        <div className="flex flex-wrap justify-end gap-2 mt-3">
          {quickAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onAmountChange(value)}
              className="w-10 p-2 rounded-xl text-sm border-2 font-bold transition"
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 flex justify-between text-sm font-bold">
        <span>YOU RECEIVE</span>
        <span>{receiveAmount}</span>
      </div>

      <SlippageSettings
        slippage={slippage}
        onSlippageChange={onSlippageChange}
      />

      <button
        onClick={onSubmit}
        className={
          "w-full py-3 rounded-2xl font-extrabold text-xl transition bg-light-gray text-white"
        }
      >
        {isBuyMode ? "Buy" : "Sell"}
      </button>
    </div>
  );
};

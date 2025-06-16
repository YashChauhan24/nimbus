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
    <div className="tradebox-invert w-full max-w-xl mx-auto md:mx-0 rounded-3xl border-2 shadow-2xl px-4 py-6 font-sans flex flex-col gap-3">
      <div className="relative w-full max-w-xl md:mx-0 font-sans">
        <label
          className="label-invert block text-xl md:text-4xl font-bold mb-4 text-center"
          htmlFor="token-search"
        >
          Paste ca or search by name/symbol
        </label>
        <input
          id="token-search"
          className="input-invert w-full px-6 py-4 rounded-2xl font-sans outline-none border-2 text-2xl md:text-3xl transition focus:border-blue-500"
          type="text"
          placeholder="0x96f4A78c19a273D95fB082800911dB66648b0670"
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <div className="flex mb-3 text-xl">
        <button
          onClick={() => onModeChange(true)}
          className={[
            "tradebox-btn-invert flex-1 py-2 border-2",
            "font-bold rounded-l-2xl text-xl",
            isBuyMode ? "bg-black text-white" : "bg-white text-black",
          ].join(" ")}
        >
          Buy
        </button>
        <button
          onClick={() => onModeChange(false)}
          className={[
            "tradebox-btn-invert flex-1 py-2 border-2 border-l-0",
            "font-bold rounded-r-2xl text-xl",
            !isBuyMode ? "bg-black text-white" : "bg-white text-black",
          ].join(" ")}
        >
          Sell
        </button>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-1 text-xl">
          <span className="font-bold">AMOUNT</span>
          <span className="text-xl">
            <span className="font-mono">{amount}</span>
            <span className="ml-2">AVAX</span>
          </span>
        </div>
        <div className="tradebox-field-invert flex items-center rounded-2xl border-2 transition">
          <input
            type="number"
            placeholder="0"
            min={0}
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            className="input-invert flex-1 rounded-2xl outline-none text-2xl font-mono px-3 py-2 transition focus:border-blue-500"
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
            }}
            inputMode="decimal"
          />
        </div>
        <div className="flex flex-wrap justify-end gap-2 mt-3">
          {quickAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onAmountChange(value)}
              className={[
                "tradebox-btn-invert quick-btn-invert",
                "px-3 py-2 rounded-lg text-lg border-2 font-bold transition",
                "hover:bg-black hover:text-white",
                "dark:hover:bg-white dark:hover:text-black",
              ].join(" ")}
              style={{ minWidth: 54 }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 flex justify-between text-xl font-bold">
        <span>YOU RECEIVE</span>
        <span className="font-mono">{receiveAmount}</span>
      </div>

      <SlippageSettings
        slippage={slippage}
        onSlippageChange={onSlippageChange}
      />

      <button
        onClick={onSubmit}
        className={[
          "cta-btn-invert w-full py-3 rounded-2xl font-extrabold text-2xl transition",
          isBuyMode ? "cta-btn-hover-buy" : "cta-btn-hover-sell",
        ].join(" ")}
      >
        {isBuyMode ? "Buy" : "Sell"}
      </button>
    </div>
  );
};

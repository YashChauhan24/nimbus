import { useState } from "react";

interface SlippageSettingsProps {
  slippage: number;
  onSlippageChange: (value: number) => void;
}

export const SlippageSettings = ({
  slippage,
  onSlippageChange,
}: SlippageSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const presetValues = [0.1, 0.5, 1.0];

  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="slippage-label-invert flex items-center gap-2 text-xl font-bold bg-transparent border-none shadow-none focus:outline-none"
      >
        Slippage Settings
        <span
          className={["transition-transform", isOpen ? "rotate-180" : ""].join(
            " "
          )}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 flex flex-wrap gap-2 items-center">
          {presetValues.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onSlippageChange(value)}
              className={[
                "tradebox-btn-invert quick-btn-invert",
                "px-2 py-1 rounded text-lg border-2 font-bold transition",
                "hover:bg-black hover:text-white",
                "dark:hover:bg-white dark:hover:text-black",
                slippage === value ? "quick-btn-selected" : "",
              ].join(" ")}
            >
              {value}%
            </button>
          ))}
          <input
            className="input-invert border-2 w-15 px-2 py-1 rounded-2xl text-lg outline-none font-mono transition focus:border-blue-500"
            min={0}
            max={5}
            step="0.1"
            type="number"
            value={slippage}
            onChange={(e) => onSlippageChange(parseFloat(e.target.value))}
          />
          <span className="text-lg">%</span>
        </div>
      )}
    </div>
  );
};

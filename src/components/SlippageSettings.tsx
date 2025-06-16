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
        className="flex items-center gap-2 font-bold bg-transparent border-none shadow-none focus:outline-none"
      >
        Slippage Settings
        <span className={`${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="mt-2 flex flex-wrap gap-2 items-center">
          {presetValues.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onSlippageChange(value)}
              className={`px-2 py-1 rounded text-sm border-2 font-bold transition ${
                slippage === value ? "quick-btn-selected" : ""
              }`}
            >
              {value}%
            </button>
          ))}
          <input
            className="border-2 w-14 px-2 py-1 rounded-2xl text-sm outline-none transition"
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

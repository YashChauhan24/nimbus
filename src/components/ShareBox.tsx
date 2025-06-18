import { HiGlobeAlt } from "react-icons/hi";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

interface ShareBoxProps {
  contractAddress: string;
  coinName: string;
  siteUrl?: string;
  displayText?: string;
  paidAmount?: number;
}

export const ShareBox = ({
  contractAddress,
  coinName,
  siteUrl,
  displayText,
  paidAmount = 0,
}: ShareBoxProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getIconByPaidAmount = () => {
    if (paidAmount >= 1000) return "⭐";
    if (paidAmount >= 500) return "💎";
    if (paidAmount >= 100) return "🌟";
    return "⭐";
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-2 bg-background text-text border-2 border-gray rounded-2xl shadow-md w-full max-w-[600px] relative">
      {/* Paid Icon */}
      <span
        className="absolute -top-3 -right-2 text-xl bg-background rounded-full w-6 h-6 flex items-center justify-center"
        title={`Paid: $${paidAmount}`}
      >
        {getIconByPaidAmount()}
      </span>

      {/* Logo */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray rounded-xl shrink-0">
        <span className="flex w-full h-full justify-center items-center text-base sm:text-xl">
          {coinName}
        </span>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="font-bold text-sm sm:text-base leading-snug">
          {displayText?.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex sm:flex-col items-center gap-2 ml-auto">
        <div className="flex items-center gap-1">
          {/* Globe/Hyperlink Icon */}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-gray hover:text-white hover:bg-opacity-20 rounded-xl transition"
              title="Visit website"
            >
              <HiGlobeAlt className="w-5 h-5" />
            </a>
          )}
          {/* Contract Address and Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl hover:bg-gray hover:text-white hover:bg-opacity-20 transition"
            title="Copy contract address"
          >
            <span className="text-sm">ca</span>
          </button>
        </div>

        {/* Like and Dislike Buttons */}
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 hover:bg-gray hover:text-white hover:bg-opacity-20 rounded-full transition"
            title="Like"
          >
            <LuThumbsUp className="w-5 h-5" />
          </button>
          <button
            className="p-1.5 hover:bg-gray hover:text-white hover:bg-opacity-20 rounded-full transition"
            title="Dislike"
          >
            <LuThumbsDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

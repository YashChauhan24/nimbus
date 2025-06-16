interface Token {
  symbol: string;
  name: string;
  age: string;
}

interface RecentlyAddedProps {
  tokens: Token[];
  onTokenSelect: (token: Token) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const RecentlyAdded = ({
  tokens,
  onTokenSelect,
  currentPage,
  totalPages,
  onPageChange,
}: RecentlyAddedProps) => {
  return (
    <aside className="w-full h-full overflow-y-auto border-2 rounded-3xl shadow-2xl px-4 py-6 space-y-3 recently-added-invert">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-center">
        Recently&nbsp;Added
      </h2>

      <div className="flex justify-center items-center gap-2 px-2 mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
        <span className="w-20 sm:w-24 text-xl sm:text-2xl font-bold text-center">
          Symbol
        </span>
        <span className="flex-1 text-xl sm:text-2xl text-center">Name</span>
        <span className="w-16 sm:w-20 text-xl sm:text-2xl font-mono text-gray-800 text-center">
          Age
        </span>
      </div>

      <div className="space-y-2">
        {tokens.map((token, index) => (
          <button
            key={index}
            onClick={() => onTokenSelect(token)}
            className="recently-added-btn-invert flex flex-row justify-center items-center text-center w-full p-2 sm:p-3 border-2 rounded-xl text-xl sm:text-2xl transition hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            <span className="w-20 sm:w-24 font-bold truncate text-center text-2xl sm:text-3xl">
              {token.symbol}
            </span>
            <span className="flex-1 truncate text-center">{token.name}</span>
            <span className="w-16 sm:w-20 text-lg sm:text-xl font-mono text-gray-500 ml-2 text-center">
              {token.age}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 text-sm sm:text-base">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={[
              "px-2 py-1 rounded border",
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800",
            ].join(" ")}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </aside>
  );
};

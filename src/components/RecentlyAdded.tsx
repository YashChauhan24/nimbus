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
    <aside className="w-full h-full overflow-y-auto border-2 rounded-3xl shadow-2xl px-2 py-4 space-y-3">
      <h2 className="text-base sm:text-lg font-bold mb-2 text-center">
        Recently&nbsp;Added
      </h2>

      <div className="flex justify-center items-center px-1 mb-2 border-b border-background dark:border-text pb-2">
        <span className="w-20 sm:w-24 text-sm sm:text-base font-semibold text-center">
          symbol
        </span>
        <span className="flex-1 text-sm sm:text-base text-center">name</span>
        <span className="w-16 sm:w-20 text-sm sm:text-base font-mono text-gray text-center">
          age
        </span>
      </div>

      <div className="space-y-2">
        {tokens.map((token, index) => (
          <button
            key={index}
            onClick={() => onTokenSelect(token)}
            className="flex flex-row justify-center items-center text-center w-full px-2 py-2 sm:py-4 border-2 rounded-xl text-sm sm:text-base font-normal transition hover:bg-text hover:text-background"
          >
            <span className="w-20 sm:w-24 font-bold truncate text-center">
              {token.symbol}
            </span>
            <span className="flex-1 truncate text-center">{token.name}</span>
            <span className="w-16 sm:w-20 font-mono text-gray ml-2 text-center">
              {token.age}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 text-sm sm:text-base">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`px-2 py-1 rounded border ${
              currentPage === i + 1 ? "bg-blue text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </aside>
  );
};

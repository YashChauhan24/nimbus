interface HeaderProps {
  onDarkModeToggle: () => void;
  onConnectWallet: () => void;
}

export const Header = ({ onDarkModeToggle, onConnectWallet }: HeaderProps) => {
  return (
    <header className="relative flex flex-col sm:flex-row items-center justify-between p-4 sm:px-6 md:px-8 py-4 bg-[var(--background)] text-[var(--foreground)] mb-12 sm:mb-24 gap-4 sm:gap-0">
      <div className="flex items-center z-10 w-full sm:w-auto justify-center sm:justify-start">
        <button
          onClick={onDarkModeToggle}
          className="
            px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-lg sm:text-2xl font-bold transition
            border-2 w-full sm:w-auto
            border-black bg-white text-black hover:bg-black hover:text-white
          "
        >
          dark mode
        </button>
      </div>
      <div className="w-full sm:absolute sm:left-1/2 sm:top-[90%] sm:-translate-x-1/2 sm:-translate-y-1/2 pointer-events-none select-none text-center">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold italic tracking-widest">
          powered by tek
        </span>
      </div>
      <div className="flex items-center z-10 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={onConnectWallet}
          className="
            px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-lg sm:text-2xl font-bold transition
            border-2 w-full sm:w-auto
            border-black bg-white text-black hover:bg-black hover:text-white
          "
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

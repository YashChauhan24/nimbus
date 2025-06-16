interface HeaderProps {
  onDarkModeToggle: () => void;
  onConnectWallet: () => void;
}

export const Header = ({ onDarkModeToggle, onConnectWallet }: HeaderProps) => {
  return (
    <header className="relative flex flex-col sm:flex-row items-center justify-between p-4 sm:px-6 md:px-8 py-4 mb-12 sm:mb-24 gap-4 sm:gap-0">
      <div className="w-full sm:absolute sm:left-1/2 sm:top-[80%] sm:-translate-x-1/2 sm:-translate-y-1/2 pointer-events-none select-none text-center">
        <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-widest">
          powered by tek
        </span>
      </div>
      <div className="flex items-center z-10 w-full sm:w-auto justify-center sm:justify-start">
        <button
          onClick={onDarkModeToggle}
          className="
            px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition
            border-2 w-full sm:w-auto
            border-text bg-background text-text hover:bg-black hover:text-white
          "
        >
          dark mode
        </button>
      </div>
      <div className="flex items-center z-10 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={onConnectWallet}
          className="
            px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition
            border-2 w-full sm:w-auto
            border-text bg-background text-text hover:bg-black hover:text-white
          "
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

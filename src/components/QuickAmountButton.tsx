interface QuickAmountButtonProps {
  value: number;
  onClick: () => void;
}

export const QuickAmountButton = ({
  value,
  onClick,
}: QuickAmountButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        tradebox-btn-invert quick-btn-invert
        px-3 py-2 rounded-lg text-lg border-2 font-bold transition
        hover:bg-black hover:text-white
        dark:hover:bg-white dark:hover:text-black
      "
      style={{ minWidth: 54 }}
    >
      {value}
    </button>
  );
};

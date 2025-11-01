const Button = ({
  title,
  className,
  onClick,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} border py-2 px-4 rounded-lg bg-black dark:bg-white text-white dark:text-black border-transparent hover:text-neutral-100 dark:hover:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-400 dark:active:bg-neutral-800 active:bg-neutral-200 transition-all duration-100`}
    >
      {title}
    </button>
  );
};

export default Button;

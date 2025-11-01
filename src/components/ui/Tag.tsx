const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`${className} ml-0.5 text-xs shadow-sm  dark:shadow-black bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-md mr-1`}
    >
      {children}
    </span>
  );
};

export default Tag;

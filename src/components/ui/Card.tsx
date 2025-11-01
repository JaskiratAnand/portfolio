const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} w-full border rounded-xl shadow-sm bg-neutral-100 border-neutral-100 dark:bg-neutral-900 dark:border-neutral-900`}
    >
      {children}
    </div>
  );
};

export default Card;

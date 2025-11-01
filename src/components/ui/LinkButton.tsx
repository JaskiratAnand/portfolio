const LinkButton = ({
  text,
  url,
  className,
}: {
  text: string;
  url: string;
  className?: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`${className} h-7 border flex flex-col justify-center items-center px-2 py-1 shadow-sm dark:shadow-black rounded-full bg-neutral-50 border-neutral-50 dark:bg-neutral-800 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-700 active:bg-neutral-300 active:border-neutral-100 dark:active:bg-neutral-900`}
    >
      {text}
    </a>
  );
};

export default LinkButton;

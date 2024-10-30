"use client"

import { memo, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = memo(() => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => resolvedTheme == "dark" ? setTheme('light') : setTheme('dark')}
      className='bg-black dark:bg-white hover:bg-neutral-700 dark:hover:bg-neutral-400 duration-100 p-2 rounded-full'
    >
      {
        resolvedTheme == "dark" ?
          <SunIcon /> :
          <MoonIcon />
      }
      <span className="sr-only">Toggle theme</span>
    </button>
  )
});
ThemeToggle.displayName = "ThemeToggle";

const SunIcon = () => {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
      <circle cx="128" cy="128" fill="none" r="60" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="36" y2="16" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="62.9" x2="48.8" y1="62.9" y2="48.8" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="36" x2="16" y1="128" y2="128" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="62.9" x2="48.8" y1="193.1" y2="207.2" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="220" y2="240" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="193.1" x2="207.2" y1="193.1" y2="207.2" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="220" x2="240" y1="128" y2="128" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="193.1" x2="207.2" y1="62.9" y2="48.8" />
    </svg>
  )
}

const MoonIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='h-6 w-6'>
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="#fff" d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z" fillRule="nonzero" />
      </g>
    </svg>
  )
}

export default ThemeToggle;

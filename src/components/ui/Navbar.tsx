"use client";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { memo } from "react";

const Navbar = memo(() => {
  const router = useRouter();
  return (
    <header>
      <nav className="block w-full max-w-(--breakpoint-md) pt-4 px-5 mx-auto bg-white dark:bg-black bg-opacity-90 sticky top-3 md:py-3">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <span className="text sm:text-xl block cursor-pointer py-1.5 text-black dark:text-white font-medium">
            <button
              onClick={() => router.push("/")}
            >JASKIRAT SINGH ANAND</button>
          </span>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="hidden md:block dark:text-white">
              <button
                className="hover:font-medium active:text-neutral-400"
                onClick={() => {
                  router.push("/resume");
                }}
              >Resumé</button>
            </div>
            <div className="hidden md:block dark:text-white">
              <button
                className="hover:font-medium active:text-neutral-400"
                onClick={() => {
                  router.push("/contact");
                }}
              >Contact</button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
});
Navbar.displayName = "Navbar";

export default Navbar;
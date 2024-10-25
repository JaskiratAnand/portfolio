"use client"
import { useRouter } from "next/navigation";
import { memo } from "react";

const BottomNavbar = memo(() => {
  const router = useRouter();
  return (
    <nav className="fixed md:hidden w-[90%] z-50 h-12 -translate-x-1/2 bg-white dark:bg-black backdrop-blur-sm opacity-90 border rounded-full bottom-2 left-1/2 dark:border-neutral-700">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">

        <div className="flex justify-center items-center px-5 rounded-s-full">
          <button
            className="text-black dark:text-white hover:font-semibold active:text-black"
            onClick={() => {
              router.push("/");
            }}
          >Home</button>
        </div>

        <div className="flex justify-center items-center px-5 rounded-s-full">
          <button
            className="text-black dark:text-white hover:font-semibold active:text-neutral-500"
            onClick={() => {
              router.push("/resume");
            }}
          >Resumé</button>
        </div>

        <div className="flex justify-center items-center px-5 rounded-s-full">
          <button
            className="text-black dark:text-white hover:font-semibold active:text-neutral-500"
            onClick={() => {
              router.push("/contact");
            }}
          >Contact</button>
        </div>
      </div>
    </nav>
  )
});
BottomNavbar.displayName = "BottomNavbar";

export default BottomNavbar;
import { memo } from "react";
import BottomNavbar from "./ui/BottomNavbar"

const Footer = memo(() => {
  const LINKEDIN_URL = "https://www.linkedin.com/in/jaskiratanand/";
  const GITHUB_URL = "https://github.com/JaskiratAnand";
  
  return (
    <footer className="w-full max-w-screen-md mx-auto mt-5 px-4 pb-12 md:pb-5 md:mt-10 border-t dark:border-neutral-800">
      <div className="flex flex-row justify-between items-center h-20 px-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-300">© Jaskirat Anand</p>
        <div className="flex flex-row gap-3 text-sm text-neutral-500 dark:text-neutral-300">
          <a 
            href={LINKEDIN_URL}
            target="_blank"
          >LinkedIn</a>
          <a 
            href={GITHUB_URL}
            target="_blank"
          >GitHub</a>
        </div>
      </div>
      <BottomNavbar />
    </footer>
  )
});
Footer.displayName = "Footer";

export default Footer;
import { memo } from "react"
import Image from "next/image"

import WhatsAppIcon from "@/public/icons/whatsapp-icon.png"
import LinkedInIcon from "@/public/icons/linkedin-icon.png"
import GitHubIcon from "@/public/icons/github-icon.png"
import TwitterIcon from "@/public/icons/twitter-icon.png"
import EmailIcon from "@/public/icons/email-icon.png"

const Contacts = memo(() => {
  return (
    <div className="flex flex-col pt-5 gap-3 justify-center items-center">

      <a
        href="https://wa.me/+919914622225"
        target="_blank"
        className="border border-green-600 px-2 py-1 text-white rounded-xl font-medium bg-green-600 flex flex-row items-center justify-center gap-2 w-60"
      >
        <Image
          src={WhatsAppIcon}
          alt="whatsapp-icon"
          width={30}
          height={30}
        />
        Chat on WhatsApp
      </a>

      <a
        href="mailto:jaskiratanand01@gmail.com"
        target="_blank"
        className="border border-red-600 px-2 py-1 text-white rounded-xl bg-red-600 font-medium flex flex-row items-center justify-center gap-2 w-60"
      >
        <Image
          src={EmailIcon}
          alt="gmail-icon"
          width={30}
          height={30}
        />
        E-mail
      </a>

      <a
        href="https://www.linkedin.com/in/jaskiratanand/"
        target="_blank"
        className="border border-blue-600 px-2 py-1 text-white rounded-xl bg-blue-600 font-medium flex flex-row items-center justify-center gap-2 w-60"
      >
        <Image
          src={LinkedInIcon}
          alt="linkedin-icon"
          width={30}
          height={30}
        />
        Connect on LinkedIn
      </a>

      <a
        href="https://github.com/JaskiratAnand"
        target="_blank"
        className="border border-gray-800 px-2 py-1 text-white rounded-xl bg-gray-800 font-medium flex flex-row items-center justify-center gap-2 w-60"
      >
        <Image
          src={GitHubIcon}
          alt="github-icon"
          width={30}
          height={30}
        />
        GitHub Profile
      </a>

      <a
        href="https://x.com/Jaskirat_Anand"
        target="_blank"
        className="border border-neutral-900 px-2 py-1 text-white rounded-xl bg-neutral-900 font-medium flex flex-row items-center justify-center gap-2 w-60"
      >
        <Image
          src={TwitterIcon}
          alt="twitter-icon"
          width={30}
          height={30}
        />
        Chat on X/Twitter
      </a>
    </div>
  );
});
Contacts.displayName = "Contacts";

export default Contacts;
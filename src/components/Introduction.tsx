"use client"
import { memo } from "react";
import Button from "./ui/Button";

const Introduction = memo(() => {
  const LINKEDIN_URL = "https://www.linkedin.com/in/jaskiratanand/"
  const GITHUB_URL = "https://github.com/JaskiratAnand"

  return (
    <div className="pt-8 md:pt-12 px-4">
      <h1 className="text-2xl text-neutral-600 dark:text-neutral-400 md:text-4xl font-semibold pt-5 pb-5 md:pb-8">
        <span className="font-bold text-black dark:text-white">Hi! I&apos;m Jaskirat Anand. </span>
        I am a full-stack web developer freelancer.
      </h1>
      <p className="md:text-lg pb-2 text-pretty md:text-justify">
        I am passionate about developing web applications and creating user-friendly, scalable tools.
      </p>
      <p className="md:text-lg pb-2 text-pretty md:text-justify">
        I earned my Bachelor of Technology in Computer Science & Engineering from Chandigarh Engineering College, CGC Landran in 2024.
      </p>
      <p className="md:text-lg pb-4 text-pretty md:text-justify">
        I am experienced in Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. I focus on writing high-quality code.
      </p>
      <div className="flex flex-row gap-4">
        <Button
          title="LinkedIn"
          className="font-mono text-lg font-medium"
          onClick={() => {
            window.open(LINKEDIN_URL, "_blank");
          }}
        />
        <Button
          title="GitHub"
          className="font-mono text-lg font-medium"
          onClick={() => {
            window.open(GITHUB_URL, "_blank");
          }}
        />
      </div>
    </div>
  );
});
Introduction.displayName = "Introduction";

export default Introduction;

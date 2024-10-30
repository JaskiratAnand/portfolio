import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jaskirat Anand - Portfolio",
  description: "Portfolio Website",
  openGraph: {
    siteName: "Jaskirat Anand - Portfolio",
    url: "https://jaskiratanand.vercel.app",
    images: [
      {
        url: "https://i.postimg.cc/9fW4kw3W/Jaskirat-Anand-Portfolio.png",
        width: 1280,
        height: 720,
        alt: "Jaskirat Anand Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

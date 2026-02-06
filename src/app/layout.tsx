import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Rock | Web3 Community Manager",
  description: "Portfolio of The Rock - Professional Web3 Community Manager since 2022. Expert in DeFi, GameFi, and scaling Web3 communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BackgroundOrbs />
        <Spotlight />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Contact />
      </body>
    </html>
  );
}

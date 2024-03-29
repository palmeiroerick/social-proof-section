import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { League_Spartan } from "next/font/google";
import type { ReactNode } from "react";

const leagueSpartan: NextFont = League_Spartan({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Proof Section",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} relative h-full py-20 lg:flex lg:h-screen lg:items-center lg:justify-center lg:p-0`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

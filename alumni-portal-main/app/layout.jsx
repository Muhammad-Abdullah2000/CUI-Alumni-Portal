import localFont from "next/font/local";
import "./globals.css";

import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: "./Inter.ttf",
  display: "swap",
});

export const metadata = {
  title: "COMSIANS' connect",
  description: `The "COMSIAN Connect" is intended to foster relationships between alumni and students
  through one-on-one guidance, advice, and communication. Student are paired with Mentors based
  on major and/or anticipated industry with an alumnus in a similar career. This platform is meant
  to add value to a student's education and experience at COMSATS.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster richColors theme={"light"} />
        </Providers>
      </body>
    </html>
  );
}

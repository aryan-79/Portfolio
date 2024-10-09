import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Mulish } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: "Aryan Budhathoki",
  description: "Portfolio of Aryan Budhathoki",
};

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={mulish.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

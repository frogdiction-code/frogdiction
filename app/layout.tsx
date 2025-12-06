import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icons/frog-logo-mobile%20.png",
    shortcut: "/icons/frog-logo-mobile%20.png",
    apple: "/icons/frog-logo-mobile%20.png",
  },
  title: "Frogdiction - $FDTN",
  description: "AI-enhanced prediction market ecosystem on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0 h-full">
      <body
        className={`${nunito.variable} ${nunito.className} antialiased m-0 p-0 h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

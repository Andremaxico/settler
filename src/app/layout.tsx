import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { RecoilRoot } from "recoil";
import { RecoilProvider } from "@/providers/RecoilProvider";
import { AddPostModal } from "./components/AddPostModal/AddPostModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Settler",
  description: "App for settle in internet pleasure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilProvider>
          <NextAuthProvider>
            {/* Header */}
            <Header />
            {children}
            <AddPostModal /> 
          </NextAuthProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}

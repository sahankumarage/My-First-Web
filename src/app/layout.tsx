import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceylon Curated | Handcrafted Sri Lanka Travel Experiences",
  description:
    "Handcrafted, immersive journeys across Sri Lanka. Small groups, ethical travel, and deeply personal experiences co-designed with local communities.",
};

import { StudentProvider } from "@/context/StudentContext";

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
        <StudentProvider>
          {children}
        </StudentProvider>
      </body>
    </html>
  );
}

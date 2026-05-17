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
  title: "DoraPilot — Reply to your bank's DORA assessment in hours, not weeks",
  description:
    "DoraPilot helps small ICT vendors and SME financial entities ship DORA-compliant answers, Register of Information files, and Article 30 contract annexes — drafted in minutes, reviewed by your auditor, ready for submission.",
  metadataBase: new URL("https://dorapilot.com"),
  openGraph: {
    title: "DoraPilot — DORA compliance for vendors and small banks",
    description:
      "Reply to your bank's DORA assessment in 2 hours, not 60. Generate Register of Information files in xBRL-CSV. Built for EU teams.",
    url: "https://dorapilot.com",
    siteName: "DoraPilot",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

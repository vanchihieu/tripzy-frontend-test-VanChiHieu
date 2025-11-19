import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error: Cannot find module or type declarations for side-effect import of './globals.css'.
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripzy - Travel Smarter, Not Harder",
  description:
    "Make every trip effortless. Tripzy lets you book rides and plan journeys with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  );
}

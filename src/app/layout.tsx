import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/base/layout/BaseLayout";
import { brands } from "@/config/brands";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Claims Landing Pages",
  description: "Find out if you qualify for compensation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use a default brand for the root layout
  const defaultBrand = brands['pj'];

  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout brand={defaultBrand} isRootLayout={true}>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ConfigProvider } from "antd";
import Theme from "@/themes/Default";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contest PRO",
  description: "Tham gia contest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ConfigProvider theme={Theme}>
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}

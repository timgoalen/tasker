import type { Metadata } from "next";

import "./styles/globals.css";
import { inconsolata } from "./ui/fonts";
import Dashboard from "./ui/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "tasker",
  description: "Developer Task Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 'antialiased' is a Tailwind class */}
      <body className={`${inconsolata.className} antialiased`}>
        <Dashboard />
        {children}
      </body>
    </html>
  );
}

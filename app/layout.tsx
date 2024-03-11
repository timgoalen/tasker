import type { Metadata } from "next";

import "./styles/globals.css";
import { inconsolata } from "./ui/fonts";
import SideNav from "./ui/sidenav/SideNav";

export const metadata: Metadata = {
  title: "tasker",
  description: "A Developer Task Tool",
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
        <SideNav />
        {children}
      </body>
    </html>
  );
}

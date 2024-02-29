import type { Metadata } from "next";
import { inconsolata } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Tasker",
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
        {children}</body>
    </html>
  );
}

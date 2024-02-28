import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

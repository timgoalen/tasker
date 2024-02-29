import React from "react";
import SideNav from "../ui/dashboard/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SideNav />
      {children}
    </main>
  );
}

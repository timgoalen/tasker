"use client";

import Link from "next/link";
import NavLink from "./NavLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <>
      <h2>Dashboard Nav</h2>

      <Link
        href="/"
        className={clsx("text-blue-800", pathname === "/" ? "text-red-800" : "")}
      >
        Home
      </Link>
      <Link
        href="/dashboard/signup"
        className={clsx(
          "text-blue-800",
          pathname === "/dashboard/signup" ? "text-red-800" : ""
        )}
      >
        Sign Up
      </Link>
      <Link
        href="/dashboard/login"
        className={clsx(
          "text-blue-800",
          pathname === "/dashboard/login" ? "text-red-800" : ""
        )}
      >
        Log In
      </Link>
      <Link
        href="/dashboard/workspaces"
        className={clsx(
          "text-blue-800",
          pathname === "/dashboard/workspaces" ? "text-red-800" : ""
        )}
      >
        Workspaces
      </Link>
    </>
  );
}

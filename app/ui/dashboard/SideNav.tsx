"use client";

import Link from "next/link";
import NavLink from "./NavLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="side-nav">
      <Link
        href="/"
        className={clsx(
          "grey-text nav-link",
          pathname === "/" ? "black-text nav-link" : "nav-link"
        )}
      >
        Home
      </Link>
      <Link
        href="/dashboard/workspaces"
        className={clsx(
          "grey-text nav-link",
          pathname === "/" ? "black-text nav-link" : "nav-link"
        )}
      >
        Workspaces
      </Link>
      <Link
        href="/dashboard/login"
        className={clsx(
          "grey-text nav-link",
          pathname === "/" ? "black-text nav-link" : "nav-link"
        )}
      >
        Log In
      </Link>
    </div>
  );
}

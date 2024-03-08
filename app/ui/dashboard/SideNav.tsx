"use client";

import Link from "next/link";
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
          pathname === "/" ? "active-link nav-link" : "nav-link"
        )}
        // className="grey-text nav-link"
      >
        Home
      </Link>
      <Link
        href="/workspaces"
        className={clsx(
          "grey-text nav-link",
          pathname === "/workspaces" ? "active-link nav-link" : "nav-link"
        )}
        // className="grey-text nav-link"
      >
        Workspaces
      </Link>
      <Link
        href="/signin"
        className={clsx(
          "grey-text nav-link",
          pathname === "/login" ? "active-link nav-link" : "nav-link"
        )}
        // className="grey-text nav-link"
      >
        Sign In
      </Link>
    </div>
  );
}

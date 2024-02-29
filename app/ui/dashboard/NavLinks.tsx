"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({ name, href }) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={clsx("text-blue-800", {
          "text-red": pathname === {href},
        })}
      >
        {name}
      </Link>
    </>
  );
}

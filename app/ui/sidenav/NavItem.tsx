"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "@/app/styles/NavItem.module.css";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(styles.container, pathname === href && styles.active)}
    >
      {children}
    </Link>
  );
}

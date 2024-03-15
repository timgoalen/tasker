"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { openSans } from "@/app/ui/fonts";
import styles from "@/app/styles/NavItem.module.css";

interface NavItemProps {
  href: string;
  label: string;
  icon: IconDefinition;
}

export default function NavItem({ href, label, icon }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(styles.container, pathname === href && styles.active)}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {/* <div className={`${openSans.className} antialiased ${styles.label}`}>
        {label}
      </div> */}
    </Link>
  );
}

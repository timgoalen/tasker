import { ReactElement } from "react";

import { openSans } from "@/app/ui/fonts";

import styles from "@/app/styles/Tooltip.module.css";

interface TooltipTypes {
  text: string;
  children: ReactElement;
}

export default function Tooltip({ text, children }: TooltipTypes) {
  return (
    <div className={styles.tooltip}>
      <div className={`${openSans.className} antialiased ${styles.text}`}>
        {text}
      </div>
      {children}
    </div>
  );
}

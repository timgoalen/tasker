import { ReactElement } from "react";

import styles from "@/app/styles/Tooltip.module.css";

interface TooltipTypes {
  text: string;
  children: ReactElement;
}

export default function Tooltip({ text, children }: TooltipTypes) {
  return (
    <div className={styles.tooltip}>
      <span>{text}</span>
      {children}
    </div>
  );
}

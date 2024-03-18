import { openSans } from "@/app/ui/fonts";

import styles from "@/app/styles/Header.module.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div
        className={`${openSans.className} ${styles.headerLeft} antialiased page-title`}
      >
        {title}
      </div>
      <div className={styles.Right}></div>
    </header>
  );
}

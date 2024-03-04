import styles from "@/app/styles/App.module.css";
import Link from "next/link";

import Workspace from "./ui/workspace/Workspace";
import Header from "./ui/Header";

export default function Home() {
  return (
    <>
      <Header title="Workspace 1" />

      <div className={styles.container}>
        <section className={styles.content}>
          - do this thing task
        </section>
      </div>
    </>
  );
}

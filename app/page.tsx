import styles from "@/app/ui/home.module.css";
import Link from "next/link";

import Workspace from "./ui/workspace/Workspace";

export default function Home() {
  return (
    <main>
      <section className="page-container">
        <h1>tasker</h1>

        <p className={styles.para}>Workspace</p>

        <Workspace />

        <hr></hr>
        <Link href="/dashboard">Dashboard</Link>
        {/* {workspaces.map((workspace) => (
          <p>workspace.title</p>
        ))} */}
      </section>
    </main>
  );
}

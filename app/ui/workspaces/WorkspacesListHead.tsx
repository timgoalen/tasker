import { Plus, ArrowDownAZ } from "lucide-react";

import styles from "@/app/styles/WorkspacesListHead.module.css";

export default function WorkspacesListHead() {
  return (
    <div className={styles.container}>
      <div className={styles.addNew}>
        <div className={styles.icon}>
          <Plus size={16} />
        </div>
        <div className={styles.text}>New</div>
      </div>

      <div className={styles.filter}>
        <ArrowDownAZ size={16} />
      </div>
    </div>
  );
}

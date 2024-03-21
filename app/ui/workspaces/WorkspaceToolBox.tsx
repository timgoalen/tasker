import { motion } from "framer-motion";
import { FolderPen, Trash } from "lucide-react";

import styles from "@/app/styles/WorkspaceToolBox.module.css";

export default function WorkspaceToolBox() {
  return (
    <motion.div
      className={styles.container}
      transition={{ duration: 0.05 }}
      initial={{ y: -30, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    >
      <div className={styles.tool}>
        <FolderPen size={16} />
        <div>Rename</div>
      </div>

      <div className={styles.tool}>
        <Trash size={16} />
        <div>Delete</div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "@/app/styles/WorkspaceToolBox.module.css";

export default function WorkspaceToolBox() {
  return (
    <motion.div
      className={styles.container}
      transition={{ duration: 0.1 }}
      initial={{ y: -30, opacity: 0, scale: 0.05 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    >
      <div className={styles.tool}>
        <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
        <div>Rename</div>
      </div>

      <div className={styles.tool}>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
        <div>Delete</div>
      </div>
    </motion.div>
  );
}

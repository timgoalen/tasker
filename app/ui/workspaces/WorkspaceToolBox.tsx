import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "@/app/styles/WorkspaceToolBox.module.css";

export default function WorkspaceToolBox() {
  return (
    <div className={styles.container}>
      <div className={styles.tool}>
        <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
        <div>Rename</div>
      </div>

      <div className={styles.tool}>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
        <div>Delete</div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "@/app/styles/WorkspacesListHead.module.css";

export default function WorkspacesListHead() {
  return (
    <div className={styles.container}>
      <div className={styles.addNew}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className={styles.text}>New</div>
      </div>

      <div className={styles.filter}>
        <FontAwesomeIcon icon={faArrowDownAZ} />
      </div>
    </div>
  );
}

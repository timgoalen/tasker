import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import styles from "@/app/styles/WorkspaceListItem.module.css";

export default function WorkspaceListItem() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faFolder} />
        </div>

        <div className={styles.title}>Workspace Title Goes Here</div>

        <div className={styles.date}>01/03/24</div>

        <div className={styles.options}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </>
  );
}

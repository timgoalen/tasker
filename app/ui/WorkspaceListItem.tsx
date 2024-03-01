import styles from "@/app/styles/WorkspaceListItem.module.css";

export default function WorkspaceListItem() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>()</div>
        <div className={styles.title}>Workspace Title Goes Here</div>
        <div className={styles.date}>01/03/24</div>
        <div className={styles.options}>::</div>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
}

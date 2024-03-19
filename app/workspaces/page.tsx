import Header from "../ui/header/Header";
import WorkspacesListHead from "../ui/workspaces/WorkspacesListHead";
import WorkspaceListItem from "../ui/workspaces/WorkspaceListItem";
import WorkspaceListSpacer from "../ui/workspaces/WorkspaceListSpacer";
import styles from "@/app/styles/WorkspacesPage.module.css";

export default function Page() {
  return (
    <>
      <Header title="Workspaces" />
      <section className={styles.container}>
        <div className={styles.content}>
          <WorkspacesListHead />

          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
          <WorkspaceListSpacer />
          <WorkspaceListItem />
        </div>
      </section>
    </>
  );
}

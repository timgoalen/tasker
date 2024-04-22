import Header from "../ui/header/Header";
import WorkspacesListHead from "../ui/workspaces/WorkspacesListHead";
import WorkspaceListItem from "../ui/workspaces/WorkspaceListItem";
import WorkspaceListSpacer from "../ui/workspaces/WorkspaceListSpacer";
import styles from "@/app/styles/WorkspacesPage.module.css";
import { fetchWorkspacesList } from "@/app/actions/workspaces";

export default async function Page() {
  const workspaces = await fetchWorkspacesList();

  interface Workspace {
    title: string;
    updated_on: Date;
    id: string;
  }

  return (
    <>
      <Header title="Workspaces" />

      <section className={styles.container}>
        <div className={styles.content}>
          <WorkspacesListHead />

          {workspaces.map((workspace: Workspace) => (
            <>
              <WorkspaceListItem
                title={workspace.title}
                updatedOn={workspace.updated_on}
                id={workspace.id}
              />
              <WorkspaceListSpacer />
            </>
          ))}
        </div>
      </section>
    </>
  );
}

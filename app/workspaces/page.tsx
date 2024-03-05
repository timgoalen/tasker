import Header from "../ui/header/Header";
import WorkspacesListHead from "../ui/workspaces/WorkspacesListHead";
import WorkspaceListItem from "../ui/workspaces/WorkspaceListItem";
import WorkspaceListSpacer from "../ui/workspaces/WorkspaceListSpacer";

export default function Page() {
  return (
    <>
      <Header title="Workspaces" />
      <section className="page-container">
        <div className="page-content">
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

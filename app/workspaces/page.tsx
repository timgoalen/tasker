import Header from "../ui/Header";
import WorkspaceListItem from "../ui/WorkspaceListItem";
import WorkspacesListHead from "../ui/WorkspacesListHead";

export default function Page() {
  return (
    <>
      <Header title="Workspaces" />
      <section className="page-container">
        <div className="page-content">
          <WorkspacesListHead />

          <WorkspaceListItem />
          <WorkspaceListItem />
          <WorkspaceListItem />
          <WorkspaceListItem />
          <WorkspaceListItem />
          <WorkspaceListItem />
          <WorkspaceListItem />
        </div>
      </section>
    </>
  );
}

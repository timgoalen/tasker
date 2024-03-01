import Header from "../ui/Header";
import WorkspaceListItem from "../ui/WorkspaceListItem";

export default function Page() {
  return (
    <>
      <Header title="Workspaces" />
      <section className="page-container">
        <div className="page-content">
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

"use client";

import { workspaces } from "@/app/lib/workspacesData";

export default function Page() {
  return (
    <>
      <h1>Workspaces</h1>

      <p>this is the workspaces list:</p>

      {workspaces.map((workspace) => (
        <div key={workspace.id}>{workspace.title}</div>
      ))}
    </>
  );
}

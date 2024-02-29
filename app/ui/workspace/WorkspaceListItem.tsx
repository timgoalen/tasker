"use client";

import { workspaces } from "@/app/lib/workspacesData";

export default function WorkspaceListItem({ workspace }) {
  return <div key={workspace.id}>{workspace.title}</div>;
}

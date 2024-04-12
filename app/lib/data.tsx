export async function fetchAllWorkspaces() {
  const response = await fetch(
    "http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/"
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchWorkspace(id: Number) {
  const response = await fetch(
    `http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/${id}`
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

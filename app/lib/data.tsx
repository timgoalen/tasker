export async function fetchWorkspaces() {
  const response = await fetch(
    "http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/"
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

"use server";

export async function fetchWorkspacesList() {
  const response = await fetch(
    "http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/"
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchWorkspace(id: number) {
  const response = await fetch(
    `http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/${id}`
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function deleteWorkspace(id: number) {
  const response = await fetch(
    `http://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/workspaces/${id}`,
    { method: "DELETE" }
    // then: revalidate data...
    // then: redirect user...
  );

  if (!response.ok) {
    // Activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}


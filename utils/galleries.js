import("node-fetch");

export async function getGalleries() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/galleries`);
  const galleries = await response.json();
  return galleries;
};

import { getUser } from "./user.js";

const API_KEY =
  "live_rrUo5oZ0tFWRywBNmUzm17QUXNsZQKFNIbs6qZpKmwAstpV1JOxIao6igpsiuMcl";

export async function getDogs() {
  const response = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10"
  );
  const data = await response.json();
  return data;
}

export async function like(dogId) {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/votes", {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_id: dogId,
        sub_id: getUser(),
        value: 1,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getLikes() {
  const response = await fetch(`https://api.thedogapi.com/v1/votes?sub_id=${getUser()}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return data.map((entry) => entry.image);
}

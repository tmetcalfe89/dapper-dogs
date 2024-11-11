export function setUser(user) {
  localStorage.setItem("user", user);
}

export function getUser() {
  const stored = localStorage.getItem("user");
  if (!stored) {
    throw new Error("User is not logged in.");
  }
  return stored;
}
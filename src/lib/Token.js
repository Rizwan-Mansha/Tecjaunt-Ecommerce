export function storeTokenInLocalStorage(token) {
  if (typeof window !== "undefined") {
    // Check for window object (client-side only)
    localStorage.setItem("token", token);
  }
}

export function retrieveTokenFromLocalStorage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  } else {
    return null; 
  }
}

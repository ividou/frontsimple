import { login } from "../config/urlapis";

export const loginApi = async (dni, password) => {
  const response = await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, password }),
  });

  return await response.json();
};

import { getMaterias, getMateriaById } from "../config/urlapis";
export const materiasapi = async (token) => {
  try {
    const response = await fetch(getMaterias, {
      method: "GET",
      headers: { mani: token },
    });

    return await response.json();
  } catch (error) {
    console.log("aca", error);
  }
};
export const obtenermaterasapi = async (token) => {
  try {
    const response = await fetch(getMateriaById, {
      method: "GET",
      headers: { mani: token },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

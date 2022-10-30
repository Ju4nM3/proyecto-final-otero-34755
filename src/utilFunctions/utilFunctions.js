/* import { loadDataBase } from "./firebase" */
export const dbConsult = async (ruta) => {
  const response = await fetch(ruta)
  const products = await response.json()
  return products
}

/* loadDataBase() */
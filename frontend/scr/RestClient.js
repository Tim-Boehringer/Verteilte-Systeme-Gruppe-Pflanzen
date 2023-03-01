/* fetches api data from backend and extracts its json body */
export async function fetchAllPlants() {
  return await fetch("http://localhost:4000/books", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

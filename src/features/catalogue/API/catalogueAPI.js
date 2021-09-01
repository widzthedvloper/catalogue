export function fetchCatalogue() {
  const catalogue = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(posts => posts.meals)
    .catch(error => { throw error; });
  return catalogue;
}

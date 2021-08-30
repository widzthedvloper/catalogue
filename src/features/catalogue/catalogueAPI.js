/* eslint-disable import/prefer-default-export */
export function fetchCatalogue() {
  const catalogue = fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=20&apiKey=c887fd95dcf34923b31915b722fe76c1')
    .then(res => res.json())
    .then(posts => posts.results)
    .catch(error => { throw error; });
  return catalogue;
}

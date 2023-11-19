import fetchDrinks from './utils/fetchDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

window.addEventListener('DOMContentLoaded', () => {
  fetchDrinks(URL);
});

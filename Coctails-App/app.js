//Imports
import fetchDrinks from './utils/fetchDrinks.js';
import displayDrinks from './utils/displayDrinks.js';

// URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

window.addEventListener('DOMContentLoaded', async() => {
  const data = await fetchDrinks(URL);
  displayDrinks(data);
});

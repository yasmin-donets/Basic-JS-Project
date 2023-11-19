//Imports
import presentDinks from './utils/presentDrinks.js';
import './utils/searchForm.js';
// URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

window.addEventListener('DOMContentLoaded', async () => {
  presentDinks(URL)
});

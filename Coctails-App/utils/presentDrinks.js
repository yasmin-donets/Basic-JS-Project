import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
const presentDinks = async (url) => {
  const data = await fetchDrinks(url);
  displayDrinks(data);
};
export default presentDinks;

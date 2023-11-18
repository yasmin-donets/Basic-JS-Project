//Imports
import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';
//selection all elements needed
const btnEl = get('.btn');


//main
const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};


// adding event listeners
window.addEventListener('DOMContentLoaded', showUser);
btnEl.addEventListener('click', showUser);

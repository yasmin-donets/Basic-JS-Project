//Imports
import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
//selection all elements needed
const imgEl = get('.user-img');
const btnEl = get('.btn');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const valuesList = get('.values-list');


//main
const showUser = async() => {
  const person = await getUser();
	console.log(person);
};



const displayUser = () =>{

}


// adding event listeners
window.addEventListener('DOMContentLoaded', showUser);
btnEl.addEventListener('click', showUser);

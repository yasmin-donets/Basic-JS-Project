//Imports
import get from './utils/getElement.js';

//selection all elements needed
const imgEl = get('.user-img');
const btnEl = get('.btn');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const valuesList = get('.values-list');

const URL = 'https://randomuser.me/api/';

//main
const showUser = () => {
getUser();
};

const getUser = async ()=>{
const response = await fetch(URL);
const data = await response.json();
console.log(data);
}

// adding event listeners
window.addEventListener('DOMContentLoaded', showUser);
btnEl.addEventListener('click', showUser);


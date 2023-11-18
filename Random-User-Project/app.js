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

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  //destructure
  const person = data.results[0];
  const { email, phone } = person;
  const { large: image } = person.picture;
  const { last, first } = person.name;
  const {
    login: { password },
  } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
	console.log(number, name);
};

// adding event listeners
window.addEventListener('DOMContentLoaded', showUser);
btnEl.addEventListener('click', showUser);

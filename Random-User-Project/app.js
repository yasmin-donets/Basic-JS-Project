//Imports
import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
//selection all elements needed
const btnEl = get('.btn');
const imgEl = get('.user-img');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const valuesList = get('.values-list');
const btns = [...document.querySelectorAll('.icon')];

//main
const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

const displayUser = (person) => {
  imgEl.src = person.image;
  userValue.textContent = person.name;
  userTitle.textContent = `My name is`;
  // remove and add class active

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      userTitle.textContent = `My ${label} is:`;
      userValue.textContent = person[label];
			console.log(person[label]);
    });
  });
};

// adding event listeners
window.addEventListener('DOMContentLoaded', showUser);
btnEl.addEventListener('click', showUser);

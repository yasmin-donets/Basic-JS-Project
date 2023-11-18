import get from './getElement.js';
import removeActive from './removeActive.js';
//selecting elements
const imgEl = get('.user-img');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  imgEl.src = person.image;
  userValue.textContent = person.name;
  userTitle.textContent = `My name is`;
  // remove and add class active
  removeActive(btns);
  btns[0].classList.remove('active');
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      userTitle.textContent = `My ${label} is:`;
      userValue.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};
export default displayUser;

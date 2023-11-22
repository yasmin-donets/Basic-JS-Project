// import people array
import people from './data.js';

//selecting elemnts of html
const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = people
  .map((person, slideIndex) => {
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    const { img, name, job, text } = person;
    return `<article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join('');
const starSlider = (type) => {};
prevBtn.addEventListener('click', () => {
  starSlider('prev');
});
nextBtn.addEventListener('click', () => {
  starSlider();
});

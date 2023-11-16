// selecting elements
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const btnElement = document.querySelector('#btn');

// URL
const URL = 'https://api.quotable.io/random';

// add Event Listener

btnElement.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData({ content: quote, author: quoteAuthor }) {
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

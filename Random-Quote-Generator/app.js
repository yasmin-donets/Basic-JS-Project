// selecting elements
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const btnElement = document.querySelector('#btn');

// URL
const URL = 'https://api.quotable.io/random';

// add Event Listener

btnElement.addEventListener('click', async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
		console.log(error);
	}
});

function displayData({ content: quote, author: quoteAuthor }) {
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

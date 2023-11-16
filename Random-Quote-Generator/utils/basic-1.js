// selecting elements
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const btnElement = document.querySelector('#btn');

// URL
const URL = 'https://api.quotable.io/random';

// add Event Listener

btnElement.addEventListener('click', () => {
  getData(URL);
});

// get Data function
function getData(url) {
  const xhr = new XMLHttpRequest(); //readyState:0
  xhr.open('GET', url); //readyState:1
  xhr.send(); //readyState:4
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const { content: quote, author: quoteAuthor } = JSON.parse(
        xhr.responseText
      );
      quoteElement.textContent = quote;
      authorElement.textContent = quoteAuthor;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}

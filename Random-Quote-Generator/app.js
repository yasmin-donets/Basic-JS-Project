// selecting elements
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const btnElement = document.querySelector('#btn');

// URL
const URL = 'https://api.quotable.io/random';

// add Event Listener

btnElement.addEventListener('click', () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

// get Data function
function getData(url) {
  //returning new promise
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const { content: quote, author: quoteAuthor } = JSON.parse(data);
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

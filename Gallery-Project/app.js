// Function that helps us to choose element from html using querySelector

function getElementSelected(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please, chrck ${selection} selector, no such element exists`
    );
  }
}

// Creating constructor function

function Gallery(element) {
  this.list = [...element.querySelectorAll('.img')]; //selecting all images as an array 
	// target module by selecting all elements
	this.modal = getElementSelected('.modal');
	this.modalImage = getElementSelected('.main-img');
	this.modalImages = getElementSelected('.modal-images');
	this.closeBtn = getElementSelected('.close-btn');
	this.nextBtn = getElementSelected('.next-btn');
	this.prevBtn = getElementSelected('.prev-btn');
}

const nature = new Gallery(getElementSelected('.nature'));
const city = new Gallery(getElementSelected('.city'));

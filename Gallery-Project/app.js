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
  this.container = element;
  this.list = [...element.querySelectorAll('.img')]; //selecting all images as an array
  // target module by selecting all elements
  this.modal = getElementSelected('.modal');
  this.modalImage = getElementSelected('.main-img');
  this.imageName = getElementSelected('.image-name');
  this.modalImages = getElementSelected('.modal-images');
  this.closeBtn = getElementSelected('.close-btn');
  this.nextBtn = getElementSelected('.next-btn');
  this.prevBtn = getElementSelected('.prev-btn');
  // bind functions
  //this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  //container event
  this.container.addEventListener(
    'click',
    function (e) {
      // self.openModal();
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  //console.log(this);
  this.setMainImage(selectedImage);
  //displaying list of foto in open modal
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
    })
    .join('');
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtnBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtnBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
};

Gallery.prototype.nextImage = function () {};
Gallery.prototype.prevImage = function () {};
const nature = new Gallery(getElementSelected('.nature'));
const city = new Gallery(getElementSelected('.city'));

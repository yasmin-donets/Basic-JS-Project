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

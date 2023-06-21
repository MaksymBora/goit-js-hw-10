import getRefs from './get-refs';

const refs = getRefs();

const closeBtn = document.querySelector('.close-btn');
const containerHtml = document.querySelector('.container');

// Function to close the modal
function onClickClose() {
  refs.container.style.display = 'none';
}

// Close the modal when the user clicks outside of it
closeBtn.addEventListener('click', onClickClose);

import getRefs from './get-refs';

const refs = getRefs();

// Function to close the modal
function onClickClose() {
  refs.container.classList.remove('is-active');
}

// Close the modal when the user clicks outside of it
refs.closeButton.addEventListener('click', onClickClose);

import API from './cat-api';
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-notify-aio';

// fetching API and adding <options> in select
function createOptions() {
  API.fetchBreeds()
    .then(getAllIds)
    .catch(error => {
      if (error) {
        showError();
      }
    });
}

// Add all ids in select ".breed-select"
function getAllIds(arr) {
  const breedSelect = document.querySelector('.breed-select');

  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i].id;
    let text = arr[i].id;

    const optionsElement = document.createElement('option');
    optionsElement.value = value;
    optionsElement.textContent = text;
    breedSelect.appendChild(optionsElement);
  }
}

//Show error
function showError() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!',
    'Try Again'
  );
}

export default createOptions;

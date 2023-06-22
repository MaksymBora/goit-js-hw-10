import API from './cat-api';
import getRefs from './get-refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = getRefs();

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
  //test
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
  Notify.failure(' Oops! Something went wrong! Try reloading the page!');
}

export default createOptions;

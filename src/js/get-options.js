import API from './cat-api';
import getRefs from './get-refs';

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
  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i].id;
    let text = arr[i].id;

    const optionsElement = document.createElement('option');
    optionsElement.value = value;
    optionsElement.textContent = text;
    refs.select.appendChild(optionsElement);
  }
}

//Show error
function showError() {
  refs.errorMessage.style.display = 'block';
}

export default createOptions;

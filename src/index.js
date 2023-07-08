import getRefs from './js/get-refs';
import getOptions from './js/make-options';
import { showError } from './js/notifications';
import { clearCatContainer } from './js/clearcatcont';
import { showLoadingMessage, hideLoadingMessage } from './js/loader';
import CatApiService from './js/cat-service';
import { renderingCatCard } from './js/renderingCatCard';

const refs = getRefs();
const catApiService = new CatApiService();

refs.select.addEventListener('change', onSelectView);

// API Fetch & Add options in select
getOptions();

// Fetching object with chosen breed and create markup
function onSelectView() {
  catApiService.breedId = refs.select.value;

  const isContent = document.querySelector('.img-cat');

  if (isContent) {
    clearCatContainer();
  }

  // Show loading message
  showLoadingMessage();

  catApiService
    .fetchCatByBreed()
    .then(renderingCatCard)
    .catch(showError)
    .finally(hideLoadingMessage);

  // add is-active class for modal window
  refs.container.classList.add('is-active');
}

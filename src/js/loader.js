import getRefs from './get-refs';

const refs = getRefs();

// Show loading message
export function showLoadingMessage() {
  refs.loadingMessage.style.display = 'block';
}

// Hide loading message
export function hideLoadingMessage() {
  refs.loadingMessage.style.display = 'none';
}

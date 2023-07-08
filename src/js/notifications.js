import Notiflix from 'notiflix';

export function showError() {
  Notiflix.Notify.failure(
    ' Oops! Something went wrong! Try reloading the page!'
  );
}

//Show error
export function showErrorFailure() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!',
    'Try Again'
  );
}

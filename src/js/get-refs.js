// all selectors
function getRefs() {
  return {
    select: document.querySelector('.breed-select'),
    catContainer: document.querySelector('.cat-info'),
    loadingMessage: document.querySelector('.loader'),
    errorMessage: document.querySelector('.error'),
    closeButton: document.querySelector('.close-btn'),
    content: document.querySelector('.content'),
    container: document.querySelector('.container'),
    selectMenu: document.querySelector('.ss-main'),
  };
}

export default getRefs;

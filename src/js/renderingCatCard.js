import getRefs from './get-refs';

const refs = getRefs();

// Create Markup
export function renderingCatCard(arr) {
  const markUpTest = arr
    .map(({ url, breeds }) => {
      const { description, temperament } = breeds[0];
      const markUp = `
    <img class="img-cat" src="${url}" width="440" height="400" loading="lazy">
    	<div class="intro">
        <p class="cat-info"><b>Description: </b>${description}</p>
        <p class="cat-info"><b>Temperament: </b>${temperament}</p>
      	</div>
  `;

      return markUp;
    })
    .join('');

  refs.catContainer.insertAdjacentHTML('beforeend', markUpTest);
}

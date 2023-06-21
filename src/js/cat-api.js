const API_KEY =
  'live_g3D26VHAvpkRAZlZj7jcyMBbUD2jb6JQVlVVYA60YGep9O596PhpPwwPd9go9JOy';

const errorMessage = document.querySelector('.error');
//Show error
function showError() {
  errorMessage.style.display = 'block';
}

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds/`;

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => response.json());
}

export default { fetchBreeds, fetchCatByBreed };

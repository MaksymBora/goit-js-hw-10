import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

// Add all ids in select ".breed-select"
export function getAllIds(arr) {
  const breedSelect = document.querySelector('.breed-select');

  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i].id;
    let text = arr[i].name;

    const optionsElement = document.createElement('option');
    optionsElement.value = value;
    optionsElement.textContent = text;
    breedSelect.appendChild(optionsElement);
  }

  new SlimSelect({
    select: '.breed-select',
  });
}

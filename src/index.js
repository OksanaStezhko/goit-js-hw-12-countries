import './styles.css';

import fetchCountries from './js/fetchCountries';
import addContent from './js/addContent';
import debounce from '../node_modules/lodash.debounce';

const nameCountry = document.querySelector('.js-name-country');

function onChangeNameCountry(event) {
  if (!event.target.value.length) {
    return;
  }
  fetchCountries(event.target.value).then(addContent).catch(console.error);
}

nameCountry.addEventListener('input', debounce(onChangeNameCountry, 500));

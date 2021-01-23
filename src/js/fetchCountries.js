function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const options = {
    headers: {
      Accept: 'application/json',
    },
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(data => data)
    .catch(console.error);
}
export default fetchCountries;

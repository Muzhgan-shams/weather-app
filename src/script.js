function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#search-input');
  let cityElement = document.querySelector('#place-name');
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);

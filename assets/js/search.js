const searchInput = document.querySelector(".header__search-input");

const handleInput = (event) => {
  const inputValue = event.target.value;
  const urlObject = getUrlObject(cityGuideApiUrl, null, null, inputValue);

  showAttractionSection(urlObject);
};

const debouncedHandleInput = debounce(handleInput);

searchInput.addEventListener("input", debouncedHandleInput);

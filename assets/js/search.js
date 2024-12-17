class SearchHandler {
  constructor(cityGuideApiUrl) {
    this.cityGuideApiUrl = cityGuideApiUrl;
    this.searchInput = document.querySelector(".header__search-input");
    this.debouncedHandleInput = debounce(this.handleInput.bind(this));

    this.searchInput.addEventListener("input", this.debouncedHandleInput);
  }

  handleInput(event) {
    const inputValue = event.target.value;
    const urlObject = getUrlObject(this.cityGuideApiUrl, null, null, inputValue);
    showAttractionSection(urlObject);
  }
}

const searchHandler = new SearchHandler(cityGuideApiUrl);
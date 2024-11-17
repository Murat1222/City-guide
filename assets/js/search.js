const searchInput = document.querySelector(".header__search-input");

const handleInput = (event) => {
  const inputValue = event.target.value;
  const attractionCardsContainer = document.querySelector(".main__blocks");
  const loader = getLoadingIndicator();
  const paginationButtonsContainer = document.querySelector(".main__pagination");
  const urlObject = getUrlObject(cityGuideApiUrl, null, null, inputValue);

  attractionCardsContainer.insertAdjacentElement('beforebegin', loader);

  fetchAttractionsData(urlObject)
    .then((data) => {
      console.log(data);

      if (data) {
        const firstPageElementsData = data.slice(0, blocksPerPage);

        showAttractionCards(firstPageElementsData);
        showPaginationButtons(data.length, blocksPerPage);
      }
    })
    .catch((error) => {
      const errorMessageElement = document.createElement("span");

      attractionCardsContainer.innerHTML = "";
      paginationButtonsContainer.innerHTML = "";
      errorMessageElement.textContent = error;
      attractionCardsContainer.append(errorMessageElement);
    })
    .finally(() => {
      loader.remove();
    })
};

const debouncedHandleInput = debounce(handleInput);

searchInput.addEventListener("input", debouncedHandleInput);

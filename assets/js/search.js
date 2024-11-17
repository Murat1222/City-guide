const searchInput = document.querySelector(".header__search-input");

const handleInput = (event) => {
  const inputValue = event.target.value;
  const attractionCardsContainer = document.querySelector(".main__blocks");
  const loader = getLoadingIndicator();
  const paginationButtonsContainer = document.querySelector(".main__pagination");

  attractionCardsContainer.insertAdjacentElement('beforebegin', loader);

  fetchAttractionsData(1, 3, inputValue)
    .then((data) => {
      console.log(data);

      if (data) {
        showAttractionCards(data);
        showPaginationButtons(data.length, blocksPerPage);
      }
    })
    .catch(() => {
      const errorMessageElement = document.createElement("span");

      attractionCardsContainer.innerHTML = "";
      paginationButtonsContainer.innerHTML = "";
      errorMessageElement.textContent = "Не удалось загрузить данные. Попробуйте еще раз.";
      attractionCardsContainer.append(errorMessageElement);
    })
    .finally(() => {
      loader.remove();
    })
};

const debouncedHandleInput = debounce(handleInput);

searchInput.addEventListener("input", debouncedHandleInput);

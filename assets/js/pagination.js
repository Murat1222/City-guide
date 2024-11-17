const blocksPerPage = 3;

const showPaginationButtons = (totalItemsCount, blocksPerPage) => {
  const buttonsCount = Math.ceil(totalItemsCount / blocksPerPage);
  const paginationButtonsContainer = document.querySelector(".main__pagination");

  paginationButtonsContainer.innerHTML = '';

  for (let i = 0; i < buttonsCount; i += 1) {
    const button = document.createElement('button');
    const buttonNumber = i + 1;

    button.className = "main__pagination-btn";
    button.dataset.page = buttonNumber;
    button.textContent = buttonNumber;

    button.addEventListener('click', () => {
      const loader = getLoadingIndicator();
      const attractionCardsContainer = document.querySelector(".main__blocks");
      const urlObject = getUrlObject(cityGuideApiUrl, buttonNumber, blocksPerPage);

      attractionCardsContainer.innerHTML = "";
      attractionCardsContainer.insertAdjacentElement('beforebegin', loader);

      fetchAttractionsData(urlObject)
        .then((data) => {
          if (data) {
            showAttractionCards(data);
          }
        })
        .catch((error) => {
          const errorMessageElement = document.createElement("span");

          errorMessageElement.textContent = error;
          attractionCardsContainer.append(errorMessageElement);
        })
        .finally(() => {
          loader.remove();
        });
    });

    if (paginationButtonsContainer) paginationButtonsContainer.append(button);
  }
};

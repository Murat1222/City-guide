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

      attractionCardsContainer.innerHTML = "";
      attractionCardsContainer.insertAdjacentElement('beforebegin', loader);

      fetchAttractionsData(buttonNumber, blocksPerPage)
        .then((data) => {
          if (data) {
            showAttractionCards(data);
          }
        })
        .catch(() => {
          const errorMessageElement = document.createElement("span");

          errorMessageElement.textContent = "Не удалось загрузить данные. Попробуйте еще раз.";
          attractionCardsContainer.append(errorMessageElement);
        })
        .finally(() => {
          loader.remove();
        });
    });

    if (paginationButtonsContainer) paginationButtonsContainer.append(button);
  }
};

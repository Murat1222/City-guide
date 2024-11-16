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
      console.log(buttonNumber, blocksPerPage);

      fetchAttractionsData(buttonNumber, blocksPerPage).then((data) => {
        console.log(data);

        if (data) {
          showAttractionCards(data);
        }
      });
    });

    if (paginationButtonsContainer) paginationButtonsContainer.append(button);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.main__block');

  fetchAttractionsData().then((data) => {
    showPaginationButtons(data.length, blocksPerPage);
  });
});
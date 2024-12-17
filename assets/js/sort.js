let currentSortBy = null;
let currentOrder = null;

const handleSortButtonClick = (sortBy) => {
  if (currentSortBy === sortBy) {
    currentOrder = currentOrder === 'alph' ? null : 'alph';
  } else {
    currentSortBy = sortBy;
    currentOrder = 'alph';
  }

  const urlObject = getUrlObject(cityGuideApiUrl, 1, blocksPerPage, null, null, currentSortBy, currentOrder);
  
  fetchAttractionsData(urlObject)
    .then((data) => {
      if (data) {
        showAttractionCards(data);
        if (data.totalCount) {
          showPaginationButtons(data.totalCount, blocksPerPage);
        }
      }
    })
    .catch((error) => {
      console.error('Ошибка при загрузке данных:', error);
    });
};

const handleResetSortButtonClick = () => {
  currentSortBy = null;
  currentOrder = null;

  const urlObject = getUrlObject(cityGuideApiUrl, 1, blocksPerPage);

  fetchAttractionsData(urlObject)
    .then((data) => {
      if (data) {
        showAttractionCards(data);
        if (data.totalCount) {
          showPaginationButtons(data.totalCount, blocksPerPage);
        }
      }
    })
    .catch((error) => {
      console.error('Ошибка при сбросе сортировки:', error);
    });
};

const debouncedHandleSortButtonClick = debounce(handleSortButtonClick);
const debouncedHandleResetSortButtonClick = debounce(handleResetSortButtonClick);

document.addEventListener("DOMContentLoaded", () => {
  const sortAlphabeticallyButton = document.querySelector(".sorting__button--alph");
  const resetSortButton = document.querySelector(".sorting__button--reset");

  sortAlphabeticallyButton.addEventListener("click", () => debouncedHandleSortButtonClick('title'));
  resetSortButton.addEventListener("click", () => debouncedHandleResetSortButtonClick());
});
let currentSortBy = null;
let currentOrder = null;
let currentCategoryName = null;

const updateAttractionSection = (page = 1) => {
  const urlObject = getUrlObject(cityGuideApiUrl, page, blocksPerPage, null, currentCategoryName, currentSortBy, currentOrder);

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

const handleSortButtonClick = (sortBy) => {
  if (currentSortBy === sortBy) {
    currentOrder = currentOrder === 'alph' ? null : 'alph';
  } else {
    currentSortBy = sortBy;
    currentOrder = 'alph';
  }
  
  updateAttractionSection();
};

const handleResetSortButtonClick = () => {
  currentSortBy = null;
  currentOrder = null;
  
  updateAttractionSection();
};

const debouncedHandleSortButtonClick = debounce(handleSortButtonClick);
const debouncedHandleResetSortButtonClick = debounce(handleResetSortButtonClick);

document.addEventListener("DOMContentLoaded", () => {
  const sortAlphabeticallyButton = document.querySelector(".sorting__button--alph");
  const resetSortButton = document.querySelector(".sorting__button--reset");

  sortAlphabeticallyButton.addEventListener("click", () => debouncedHandleSortButtonClick('title'));
  resetSortButton.addEventListener("click", () => debouncedHandleResetSortButtonClick());
});
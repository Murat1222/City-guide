let categoriesLinks = null;
let activeCategoryName = null;

const filterAttractionsBlocks = (categoryName) => {
  let urlObject = null;
  const loader = getLoadingIndicator();
  const attractionCardsContainer = document.querySelector(".main__blocks");
  const paginationButtonsContainer = document.querySelector(".main__pagination");
  const currentCategoryName = categoryName === "all" ? null : categoryName;

  urlObject = getUrlObject(cityGuideApiUrl, null, null, null, currentCategoryName);
  attractionCardsContainer.insertAdjacentElement('beforebegin', loader);
  attractionCardsContainer.innerHTML = "";
  paginationButtonsContainer.innerHTML = "";

  fetchAttractionsData(urlObject)
    .then((data) => {
      if (data) {
        const firstPageElementsData = data.slice(0, blocksPerPage);

        showAttractionCards(firstPageElementsData);
        showPaginationButtons(data.length, blocksPerPage);
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
};

const handleCategoryClick = (event) => {
  event.preventDefault();
  activeCategoryName = event.target.getAttribute('data-filter');
  filterAttractionsBlocks(activeCategoryName);
};

const debouncedHandleCategoryClick = debounce(handleCategoryClick);

document.addEventListener("DOMContentLoaded", () => {
  categoriesLinks = document.querySelectorAll('a[data-filter]');

  categoriesLinks.forEach((categoryLink) => {
    categoryLink.addEventListener('click', (event) => {
      debouncedHandleCategoryClick(event);
    })
  });
});

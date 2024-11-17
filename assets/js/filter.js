let categoriesLinks = null;

const filterAttractionsBlocks = (categoryName) => {
  let urlObject = null;
  const currentCategoryName = categoryName === "all" ? null : categoryName;

  urlObject = getUrlObject(cityGuideApiUrl, null, null, null, currentCategoryName);
  showAttractionSection(urlObject);
};

const handleCategoryClick = (event) => {
  const activeCategoryName = event.target.getAttribute('data-filter');
  
  event.preventDefault();
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

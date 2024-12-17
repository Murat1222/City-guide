const filterAttractionsBlocks = (categoryName) => {
  let urlObject = null;
  const currentCategoryName = categoryName === "all" ? null : categoryName;

  urlObject = getUrlObject(cityGuideApiUrl, null, null, null, currentCategoryName);
  showAttractionSection(urlObject);
};

const handleCategoryClick = (event) => {
  event.preventDefault();
  const activeCategory = event.target.getAttribute('data-filter');
  
  currentCategoryName = activeCategory === "all" ? null : activeCategory;

  updateAttractionSection();
};

const debouncedHandleCategoryClick = debounce(handleCategoryClick);

document.addEventListener("DOMContentLoaded", () => {
  const categoriesLinks = document.querySelectorAll('a[data-filter]');

  categoriesLinks.forEach((categoryLink) => {
    categoryLink.addEventListener('click', (event) => {
      debouncedHandleCategoryClick(event);
    });
  });
});
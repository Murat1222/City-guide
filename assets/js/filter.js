let categoriesLinks = document.querySelectorAll('a[data-filter]');
let activeCategoryName = null;
let attractionsBlocks = null;

const filterAttractionsBlocks = (blocks, categoryName) => {
  blocks.forEach((attractionBlock) => {
    if (categoryName === "all" || attractionBlock.getAttribute('data-cat') === categoryName) {
      attractionBlock.classList.remove('hide');
    } else {
      attractionBlock.classList.add('hide');
    }
  })
};

if (localStorage.getItem("activeCategoryName")) {
  document.addEventListener("DOMContentLoaded", () => {
    attractionsBlocks = document.querySelectorAll('.main__block');
    activeCategoryName = localStorage.getItem("activeCategoryName");
    filterAttractionsBlocks(attractionsBlocks, activeCategoryName);
  });
}

categoriesLinks.forEach((categoryLink) => {
  categoryLink.addEventListener('click', (event) => {
    event.preventDefault();
    activeCategoryName = categoryLink.getAttribute('data-filter');
    attractionsBlocks = document.querySelectorAll('.main__block');
    filterAttractionsBlocks(attractionsBlocks, activeCategoryName);
    localStorage.setItem("activeCategoryName", activeCategoryName);
  });
})

const searchInput = document.querySelector(".header__search-input");

searchInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const attractionsBlocks = document.querySelectorAll('.main__block');

  attractionsBlocks.forEach((attractionBlock) => {
    const title = attractionBlock.querySelector(".block-title");
    const regExp = new RegExp(inputValue, "i");

    if (title.textContent.match(regExp)) {
      attractionBlock.classList.remove('hide');
    } else {
      attractionBlock.classList.add('hide');
    }
  });
});

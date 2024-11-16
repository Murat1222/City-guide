const getAttractionCardElement = (data) => {
  const {
    category,
    title: titleText,
    description: descriptionText,
    adress: adressText,
    adressHref,
    shortTitle,
    image: imageSource
  } = data;
  const cardContainer = document.createElement("div");
  const image = document.createElement("img");
  const textInfoContainer = document.createElement("div");
  const title = document.createElement("h2");
  const descriptionParagraph = document.createElement("p");
  const adressLink = document.createElement("a");

  cardContainer.className = "main__block-third main__block";
  cardContainer.dataset.cat = category;
  image.className = "main__block-img";
  image.alt = shortTitle;
  image.src = imageSource;
  textInfoContainer.className = "main__block-text";
  title.className = "main__block-txt block-title";
  title.textContent = titleText;
  descriptionParagraph.className = "main__block-description";
  descriptionParagraph.textContent = descriptionText;
  adressLink.className = "main__link";
  adressLink.textContent = adressText;
  adressLink.href = adressHref;
  adressLink.target = "_blank";

  textInfoContainer.append(title, descriptionParagraph, adressLink);
  cardContainer.append(image, textInfoContainer)

  return cardContainer;
};

const showAttractionCards = (data) => {
  const attractionCardsContainer = document.querySelector(".main__blocks");

  attractionCardsContainer.innerHTML = "";

  data.forEach((data) => {
    const card = getAttractionCardElement(data)

    attractionCardsContainer.append(card);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const attractionCardsContainer = document.querySelector(".main__blocks");
  const loader = getLoadingIndicator();

  attractionCardsContainer.insertAdjacentElement('beforebegin', loader);

  fetchAttractionsData()
    .then((data) => {
      if (data) {
        const initialCardsData = data.slice(0, blocksPerPage);

        showAttractionCards(initialCardsData);
        showPaginationButtons(data.length, blocksPerPage);
      }
    })
    .catch(() => {
      const errorMessageElement = document.createElement("span");

      errorMessageElement.textContent = "Не удалось загрузить данные. Попробуйте еще раз.";
      attractionCardsContainer.append(errorMessageElement);
    })
    .finally(() => {
      loader.remove();
    })
});

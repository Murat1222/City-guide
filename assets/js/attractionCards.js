const getAttractionCardElement = (data) => {
  const {
    id,
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
  cardContainer.id = id;
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

const showAttractionCards = (attractionsData) => {
  const attractionCardsContainer = document.querySelector(".main__blocks");

  attractionCardsContainer.innerHTML = "";

  attractionsData.forEach((attractionData) => {
    const card = getAttractionCardElement(attractionData);

    attractionCardsContainer.append(card);
  });
};

const showAttractionSection = (urlObject) => {
  const attractionCardsContainer = document.querySelector(".main__blocks");
  const paginationButtonsContainer = document.querySelector(".main__pagination");
  const loader = getLoadingIndicator();

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

document.addEventListener("DOMContentLoaded", () => {
  const urlObject = getUrlObject(cityGuideApiUrl);

  showAttractionSection(urlObject);
});

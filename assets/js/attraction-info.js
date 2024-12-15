class AttractionCard {
  constructor(data) {
    this.titleText = data.title;
    this.fullDescriptionText = data.fullDescription;
    this.imageSourceExtra = data.extraImage;
    this.imageSource = data.image;
    this.map = data.mapLink;
  }

  createElement() {
    const mainBlock = document.createElement('div');
    const imagesBlock = document.createElement('div');
    const textsBlock = document.createElement('div');
    const mapBlock = document.createElement('div');
    const title = document.createElement('h2');
    const fullDescription = document.createElement('p');
    const image = document.createElement('img');
    const extraImage = document.createElement('img');
    const mapLink = document.createElement('iframe');

    mainBlock.className = 'main__block';
    imagesBlock.className = 'main__block-images';
    textsBlock.className = 'main__block-texts';
    mapBlock.className = 'main__block-map';
    title.className = 'main__block-texts-title';
    title.textContent = this.titleText;
    fullDescription.className = 'main__block-texts-text';
    fullDescription.textContent = this.fullDescriptionText;
    image.className = 'main__block-images-image';
    image.alt = 'image';
    image.src = this.imageSource;
    extraImage.className = 'main__block-images-image';
    extraImage.alt = 'altImage';
    extraImage.src = this.imageSourceExtra;
    mapLink.className = 'main__block-map-iframe';
    mapLink.src = this.map;

    imagesBlock.append(image, extraImage);
    textsBlock.append(title, fullDescription);
    mapBlock.append(mapLink);
    mainBlock.append(imagesBlock, textsBlock, mapBlock);

    return mainBlock;
  }
}

class AttractionService {
  static fetchAttractionData(id) {
    return fetch(`https://6734e04a5995834c8a9132b6.mockapi.io/attractions/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status === 404) throw new Error('404, Ничего не найдено');
          if (response.status === 500) throw new Error('500, Внутренняя ошибка сервера');
          throw new Error(response.status);
        }
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const attractionId = urlParams.get('id');
  const mainElement = document.querySelector('.main');

  if (attractionId) {
    AttractionService.fetchAttractionData(attractionId)
      .then(data => {
        const attractionCard = new AttractionCard(data);
        const attractionElement = attractionCard.createElement();
        mainElement.append(attractionElement);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Не удалось загрузить данные о достопримечательности.';
        mainElement.append(errorMessage);
      });
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'ID достопримечательности не указан.';
    mainElement.append(errorMessage);
  }
});
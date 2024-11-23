const getAttractionCardElement = (data) => {
  const {
    title: titleText,
    fullDescription: fullDescriptionText,
    extraImage: imageSourceExtra,
    image: imageSource,
    mapLink: map,
  } = data;

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
  title.textContent = titleText;
  fullDescription.className = 'main__block-texts-text';
  fullDescription.textContent = fullDescriptionText;
  image.className = 'main__block-images-image';
  image.alt = 'Основное изображение';
  image.src = imageSource;
  extraImage.className = 'main__block-images-image';
  extraImage.alt = 'Дополнительное изображение';
  extraImage.src = imageSourceExtra;
  mapLink.className = 'main__block-map-iframe';
  mapLink.src = map;

  imagesBlock.append(image, extraImage);
  textsBlock.append(title, fullDescription);
  mapBlock.append(mapLink);
  mainBlock.append(imagesBlock, textsBlock, mapBlock);

  return mainBlock;
};

const fetchAttractionData = (id) => {
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
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const attractionId = urlParams.get('id');

  if (attractionId) {
    fetchAttractionData(attractionId)
      .then(data => {
        const attractionElement = getAttractionCardElement(data);
        document.querySelector('.main').append(attractionElement);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Не удалось загрузить данные о достопримечательности.';
        document.querySelector('.main').append(errorMessage);
      });
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'ID достопримечательности не указан.';
    document.querySelector('.main').append(errorMessage);
  }
});
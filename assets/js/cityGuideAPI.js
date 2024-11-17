const cityGuideApiUrl = 'https://6734e04a5995834c8a9132b6.mockapi.io/attractions';

const fetchAttractionsData = (urlObject) => {
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  return fetch(urlObject, options).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Возникла ошибка при запросе");
    }
  })
    .then((result) => result)
    .catch((error) => {
      throw new Error(error);
    })
};
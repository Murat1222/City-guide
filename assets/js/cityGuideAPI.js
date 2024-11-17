const cityGuideApiUrl = 'https://6734e04a5995834c8a9132b6.mockapi.io/attractions';

const fetchAttractionsData = (urlObject) => {
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  return fetch(urlObject, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) throw new Error('404, Ничего не найдено');
        if (response.status === 500) throw new Error('500, Внутренняя ошибка сервера');

        throw new Error(response.status);
      }
    })
    .then((result) => result)
    .catch((error) => {
      const errorMessage = "message" in error ? error.message : "Не удалось выполнить запрос";
      
      throw new Error(errorMessage);
    })
};
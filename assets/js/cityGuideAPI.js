const fetchAttractionsData = (...rest) => {
  const url = new URL('https://6734e04a5995834c8a9132b6.mockapi.io/attractions');
  let page = null;
  let limit = null;

  if (rest[0]) {
    page = rest[0];

    url.searchParams.append('page', page);
  }

  if (rest[1]) {
    limit = rest[1];

    url.searchParams.append('limit', limit);
  }

  if (rest[2]) {
    title = rest[2];

    url.searchParams.append('title', title);
  }

  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  return fetch(url, options).then((response) => {
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

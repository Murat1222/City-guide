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

  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  return fetch(url, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
    .then((result) => result)
    .catch(() => {
      alert("Возникла ошибка при запросе");
    })
};

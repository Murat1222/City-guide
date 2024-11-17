const getLoadingIndicator = () => {
  const loaderWrapper = document.createElement("div");
  const loader = document.createElement("div");

  loaderWrapper.classList = "loader-wrapper";
  loader.classList = "loader";

  loaderWrapper.append(loader);

  return loaderWrapper;
};

function debounce(fn, timeoutMs = 250) {
  return function perform(...args) {
    let previousCall = this.lastCall

    this.lastCall = Date.now()

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer)
    }

    this.lastCallTimer = setTimeout(() => fn(...args), timeoutMs)
  }
};

function getUrlObject(url, page, limit, title) {
  const urlObject = new URL('https://6734e04a5995834c8a9132b6.mockapi.io/attractions');

  if (page) urlObject.searchParams.append('page', page);
  if (limit) urlObject.searchParams.append('limit', limit);
  if (title) urlObject.searchParams.append('title', title);

  return urlObject;
};
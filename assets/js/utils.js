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

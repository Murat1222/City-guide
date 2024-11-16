const getLoadingIndicator = () => {
  const loaderWrapper = document.createElement("div");
  const loader = document.createElement("div");

  loaderWrapper.classList = "loader-wrapper";
  loader.classList = "loader";

  loaderWrapper.append(loader);

  return loaderWrapper;
};

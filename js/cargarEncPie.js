const loadPageFragment = (url, elementId) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      });
  };
  loadPageFragment("header.html", "header");
  loadPageFragment("footer.html", "footer");

  //sass css/scss/style.scss css/style.css 
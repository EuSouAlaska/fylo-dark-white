var themeSwitcher = document.getElementById("switch-theme");
var currentTheme = "light";

themeSwitcher.addEventListener(
  "click",
  function () {
    var lightTheme = "./index-light-theme.css";
    var darkTheme = "./style.css";

    var oldCss = document.getElementsByTagName("link").item(3);

    var newCss = document.createElement("link");
    newCss.setAttribute("rel", "stylesheet");
    newCss.setAttribute("type", "text/css");

    if (currentTheme === "light") {
      newCss.setAttribute("href", darkTheme);
      currentTheme = "dark";
    } else if (currentTheme === "dark") {
      newCss.setAttribute("href", lightTheme);
      currentTheme = "light";
    }

    document.getElementsByTagName("head").item(0).replaceChild(newCss, oldCss);
  },
  false
);

var btnMenuBurger = document.getElementsByClassName("burger__icon")[0];
var menuBurger = document.getElementsByClassName("burger__items")[0];
var menuIcon = document.getElementsByClassName("burger")[0];

btnMenuBurger.addEventListener(
  "click",
  function (event) {
    menuBurger.classList.toggle("current");
    menuIcon.classList.toggle("closed");
    event.stopPropagation();
  },
  false
);

window.addEventListener("click", function () {
  if (menuBurger.classList.contains("current")) {
    menuBurger.classList.remove("current");
    menuIcon.classList.remove("closed");
  }
});
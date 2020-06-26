var btnMenuBurger = document.getElementsByClassName("burger")[0];
var menuBurger = document.getElementsByClassName("burger__items")[0];

btnMenuBurger.addEventListener(
  "click",
  function () {
    menuBurger.classList.toggle("current");
    btnMenuBurger.classList.toggle("closed");
  },
  false
);

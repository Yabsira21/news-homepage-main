const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");

let OpenMenu = false;

menu.addEventListener("click", function (params) {
  if (!OpenMenu) {
    ul.style.display = "block";
    overlay.style.display = "block";
    menu.src = "assets/images/icon-menu-close.svg";
    OpenMenu = !OpenMenu;
  } else {
    ul.style.display = "none";
    overlay.style.display = "none";
    menu.src = "assets/images/icon-menu.svg";
    OpenMenu = !OpenMenu;
  }
});

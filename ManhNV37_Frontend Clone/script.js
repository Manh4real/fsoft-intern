const menuButton = document.getElementById("menu-btn");
const closeMenuButton = document.getElementById("close-btn");
const menu = document.getElementById("menu");

menuButton.onclick = function (e) {
  e.stopPropagation();

  menu.classList.toggle("visible");
};
closeMenuButton.onclick = function () {
  menu.classList.toggle("visible");
};

window.addEventListener("click", function () {
  menu.classList.remove("visible");
});

window.addEventListener("resize", function (event) {
  if (this.innerWidth > 1000) {
    menu.classList.remove("visible");
  }
});

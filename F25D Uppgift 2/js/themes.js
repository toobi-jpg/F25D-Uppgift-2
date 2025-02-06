const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
});

function hamburgerMenu() {
  const menu = document.querySelector(".hamburger-menu");
  menu.classList.toggle("show");
}

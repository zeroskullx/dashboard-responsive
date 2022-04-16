const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn-menu");
const closeBtn = document.querySelector("#btn-close");
const themeThoggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeThoggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeThoggler.querySelector("span:nth-child(1)").classList.toggle("actived");
  themeThoggler.querySelector("span:nth-child(2)").classList.toggle("actived");
});

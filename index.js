const toggle = document.getElementById("toggle");
const mobileNav = document.getElementById("mobile-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

toggle.addEventListener("click", (e) => {
  e.preventDefault();

  mobileNav.classList.toggle("open");
  hamburger.classList.toggle("open");
  close.classList.toggle("open");
});

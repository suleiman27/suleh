// script.js

// DROPDOWN MENU
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownBtn = dropdown.querySelector(".dropdown-btn");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  // Toggle dropdown on click
  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
    // Toggle aria-expanded for accessibility
    const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
    dropdownBtn.setAttribute("aria-expanded", !expanded);
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// HERO SLIDESHOW (optional if you have slideshow)
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slideshow img");
function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); // change every 5 seconds
}
if(slides.length > 0){
  showSlides();
}

// NAV TOGGLE FOR MOBILE
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

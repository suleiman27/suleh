/* -------------------------------------------------------
   NAVIGATION DROPDOWN
-------------------------------------------------------- */
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = btn.nextElementSibling;
    menu.classList.toggle("show");
  });
});

/* Close dropdown when clicking outside */
document.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});


/* -------------------------------------------------------
   MOBILE NAV TOGGLE
-------------------------------------------------------- */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


/* -------------------------------------------------------
   HERO SLIDESHOW (MATCHES CSS + HTML)
-------------------------------------------------------- */
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slideshow img");

function changeSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");

  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(changeSlide, 4000); // 4 seconds
changeSlide();


/* -------------------------------------------------------
   GALLERY MODAL
-------------------------------------------------------- */
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    modalImg.src = img.src;
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});


/* Close modal by clicking outside image */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});


/* -------------------------------------------------------
   CITIZENSHIP LOGIC
-------------------------------------------------------- */
const citizenship = document.getElementById("citizenship");
const idNumber = document.getElementById("idNumber");
const passportNumber = document.getElementById("passportNumber");

citizenship.addEventListener("change", function () {
  if (this.value === "citizen") {
    idNumber.style.display = "block";
    passportNumber.style.display = "none";
  } else if (this.value === "non-citizen") {
    passportNumber.style.display = "block";
    idNumber.style.display = "none";
  } else {
    idNumber.style.display = "none";
    passportNumber.style.display = "none";
  }
});


/* -------------------------------------------------------
   SET CURRENT YEAR IN FOOTER
-------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ------------------------------------------------------
   DROPDOWN CLICK TO OPEN (packages)
-------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("packagesMenu");
    const dropdownMenu = document.getElementById("dropdownContent");

    dropdownBtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});



/* ------------------------------------------------------
   HERO SLIDESHOW (smooth, non-hanging)
-------------------------------------------------------*/
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".hero-slide");
    slides.forEach(slide => slide.style.opacity = 0);

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.opacity = 1;

    setTimeout(showSlides, 4000); // 4 seconds per slide
}
showSlides();



/* ------------------------------------------------------
   CITIZEN / NON-CITIZEN ID SWITCH
-------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const citizenSelect = document.getElementById("citizenSelect");
    const idField = document.getElementById("idField");
    const passportField = document.getElementById("passportField");

    function toggleIDFields() {
        if (citizenSelect.value === "citizen") {
            idField.style.display = "block";
            passportField.style.display = "none";
        } else {
            idField.style.display = "none";
            passportField.style.display = "block";
        }
    }

    citizenSelect.addEventListener("change", toggleIDFields);
    toggleIDFields();
});



/* ------------------------------------------------------
   SMOOTH SCROLLING (menu links)
-------------------------------------------------------*/
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});



/* ------------------------------------------------------
   MOBILE MENU (if added later)
-------------------------------------------------------*/
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

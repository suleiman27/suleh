// Dropdown menu
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.parentElement.classList.toggle('active');
  });
});

// Hero slideshow
let slides = document.querySelectorAll('.hero-slideshow .slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);

// Booking citizenship toggle
const citizenship = document.getElementById('citizenship');
const idField = document.getElementById('id

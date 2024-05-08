let slideIndex = 0;
showSlides(slideIndex);

// Function to advance to the next slide
function nextSlide() {
  showSlides(slideIndex += 1);
}

// Function to go back to the previous slide
function prevSlide() {
  showSlides(slideIndex -= 1);
}

// Function to show a specific slide
function showSlides(n) {
  const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Automatic slide rotation
let slideInterval = setInterval(nextSlide, 3000); // Change 3000 to adjust the interval in milliseconds

// Pause rotation when hovering over the carousel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume rotation when mouse leaves the carousel
carousel.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 3000); // Change 3000 to adjust the interval in milliseconds
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Create dynamic indicator dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  // Move the slider horizontally
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Initialize the slider
updateSlider();

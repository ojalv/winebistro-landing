const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const viewPortWidth = window.innerWidth;

let currentIndex = 0;

// Create dynamic indicator dots
if (viewPortWidth < 767) {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
} else {
  for (let index = 0; index < slides.length - 2; index++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  }
}

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  // Move the slider horizontally
  if (viewPortWidth < 767) {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    slider.style.transform = `translateX(calc(-${currentIndex * 100}%/3))`;
  }

  // Update active dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveSlide(step) {
  if (viewPortWidth < 767) {
    const maxIndex = slides.length - 2;
    currentIndex = Math.min(maxIndex, Math.max(0, currentIndex + step));
  } else {
    currentIndex = (currentIndex + step + dots.length) % dots.length;
  }

  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Initialize the slider
updateSlider();

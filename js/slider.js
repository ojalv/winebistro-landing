let slider, slides, dotsContainer, dots, currentIndex;

function initializeSlider() {
  slider = document.querySelector(".slider");
  slides = document.querySelectorAll(".slide");
  dotsContainer = document.querySelector(".dots");
  
  let viewPortWidth = window.innerWidth;
  currentIndex = 0;
  dotsContainer.innerHTML = "";

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
  dots = document.querySelectorAll(".dot");
  updateSlider();
}

function updateSlider() {
  let viewPortWidth = window.innerWidth;
  if (viewPortWidth < 767) {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    slider.style.transform = `translateX(calc(-${currentIndex * 100}%/3))`;
  }

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveSlide(step) {
  let viewPortWidth = window.innerWidth;
  if (viewPortWidth > 767) {
    if (viewPortWidth < 767) {
      const maxIndex = slides.length - 2;
      currentIndex = Math.min(maxIndex, Math.max(0, currentIndex + step));
    } else {
      currentIndex = (currentIndex + step + dots.length) % dots.length;
    }
  } else {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
  }

  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

initializeSlider();
window.addEventListener("resize", initializeSlider);

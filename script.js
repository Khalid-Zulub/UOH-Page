const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;
let interval;

// Create dots dynamically
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        showSlide(i);
        resetInterval();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Show slide function
function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

// Next / Previous functions
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Button events
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});
prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
});

// Auto-play every 3 seconds
function startInterval() {
    interval = setInterval(nextSlide, 3000);
}

// Reset auto-play when manually clicking
function resetInterval() {
    clearInterval(interval);
    startInterval();
}

// Initialize
showSlide(index);
startInterval();

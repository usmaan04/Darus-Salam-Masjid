document.addEventListener("DOMContentLoaded", function() {
const indicatorsContainer = document.querySelector(".indicators");
const indicators = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Create indicators
indicators.forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", () => changeImage(index));
    indicatorsContainer.appendChild(indicator);
});

// Show initial active indicator
indicators[0].classList.add("active");

// Automatic cycling
let currentIndex = 0;
const intervalTime = 5000; // Change image every 5 seconds

function cycleImages() {
    currentIndex = (currentIndex + 1) % indicators.length;
    changeImage(currentIndex);
}

let cycleInterval = setInterval(cycleImages, intervalTime);

function changeImage(index) {
    indicators.forEach(indicator => indicator.classList.remove("active"));
    indicators[index].classList.add("active");
    document.querySelector(".carousel img.active").classList.remove("active");
    indicators[index].classList.add("active");
    document.querySelectorAll(".carousel img")[index].classList.add("active");
    currentIndex = index;
    clearInterval(cycleInterval);
    cycleInterval = setInterval(cycleImages, intervalTime);
}

// Manual navigation
prevButton.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + indicators.length) % indicators.length;
    changeImage(newIndex);
});

nextButton.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % indicators.length;
    changeImage(newIndex);
});
});

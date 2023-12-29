
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".nav-btn");
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;
var autoPlayTimeout;
var video = document.querySelector(".slide video");

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides[index].classList.add("active");
    btns[index].classList.add("active");
    currentSlide = index;
}

// Manual navigation
function manualNav(manual) {
    clearTimeout(autoPlayTimeout);
    showSlide(manual);
    repeat();
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
    });
});

// Autoplay navigation
function repeat() {
    autoPlayTimeout = setTimeout(function () {
        var nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
        repeat();
    }, 10000);
}

// Arrow button navigation
prevBtn.addEventListener("click", function () {
    var prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    manualNav(prevSlide);
});

nextBtn.addEventListener("click", function () {
    var nextSlide = (currentSlide + 1) % slides.length;
    manualNav(nextSlide);
});

repeat();

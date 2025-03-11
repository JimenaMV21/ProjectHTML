document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slider");

    function moveSlider(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", function () {
        moveSlider(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        moveSlider(currentIndex - 1);
    });

    setInterval(() => moveSlider(currentIndex + 1), 4000);
});

let currentIndex = 0;
let itemsPerPage = 1;

function calculateItemsPerPage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItem = document.querySelector('.carousel-item');
    const itemWidth = carouselItem.clientWidth;
    const carouselWidth = carouselInner.clientWidth;
    itemsPerPage = Math.floor(carouselWidth / itemWidth);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length / itemsPerPage) currentIndex = 0;
    if (index < 0) currentIndex = Math.floor(slides.length / itemsPerPage) - 1;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    dots[currentIndex].classList.add('active');
    document.querySelector('.carousel-inner').style.transform = `translateX(${-currentIndex * 100 / itemsPerPage}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

window.addEventListener('resize', () => {
    calculateItemsPerPage();
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    calculateItemsPerPage();
    showSlide(currentIndex);
});

const trigger = document.getElementById('trigger');

const images = document.querySelectorAll('.resurse');
const container = document.querySelector('.imagini-container');

let index = 0;
let intervalId;

function startSlideShow() {
    intervalId = setInterval(() => {
        images[index].style.display = 'none';
        index = (index + 1) % images.length;
        images[index].style.display = 'block';
    }, 3000);
}

function stopSlideShow() {
    clearInterval(intervalId);
}

trigger.addEventListener('dblclick', () => {
    container.classList.add('slideshow'); // Adaugare clasă pentru stilizare
    startSlideShow();
    trigger.addEventListener('mouseleave', stopSlideShow);
});

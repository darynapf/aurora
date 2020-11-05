let bgImages = ['bg1.jpg', 'bg2.jpg'];
let currentBg = 0;
const sliderBg = document.querySelector(".sliders");

// Change Background picture
function switchBg() {
    currentBg++
    if (currentBg === bgImages.length) {
        currentBg = 0;
    }
    let currentSlider = bgImages[currentBg];
    sliderBg.style.background = 'url(img/' + currentSlider + ') center top / cover no-repeat';
    setTimeout(switchBg, 8000);
}
switchBg();

// Mobile footer
document.querySelectorAll(".footer__item").forEach(el => el.addEventListener("click", function(event) {
    let current = event.currentTarget;
    current.classList.toggle('active');
}));
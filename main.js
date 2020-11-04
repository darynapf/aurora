// Change Background picture
let bgImages = ['bg1.jpg', 'bg2.jpg'];
let currentBg = 0;
const sliderBg = document.querySelector(".sliders");


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
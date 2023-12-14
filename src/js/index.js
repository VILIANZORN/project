import './../scss/main.scss';
import Swiper from '../../node_modules/swiper/swiper-bundle';



window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

breakpoint = window.matchMedia(breakpoint)

const enableSwiper = function (className, settings) {
  swiper = new Swiper(className, settings)
}

const checker = function () {
  if (breakpoint.matches) {
    return enableSwiper(swiperClass, swiperSettings)
  } else {
    if (swiper !== undefined) swiper.destroy(true, true)
    return
  }
}

breakpoint.addEventListener('change', checker)
checker()
  }

  resizableSwiper('(max-width: 767.5px)', '.image-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  mousewheel: {
      sensitivity: 1,
      eventsTarget:".image-slider"
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoHeight: true,
  })
})
const btn = document.querySelector(".show-button");
const cards = document.querySelector(".image-slider__wrapper");

btn.addEventListener('click', function () {
  if (btn.innerHTML === "Показать всё") {
    btn.innerHTML = "Скрыть";
    cards.style.height = getComputedStyle(cards).height; 
    cards.style.height = 'auto'; 
    var fullHeight = getComputedStyle(cards).height; 
    cards.style.height = ''; 
    setTimeout(function() {
      cards.style.height = fullHeight;
    }, 0);
    const style = document.createElement('style');
    style.innerHTML = '.show-button::before { transform: rotate(180deg); }';
    document.head.appendChild(style);
  } else {
    btn.innerHTML = "Показать всё";
    var fullHeight = getComputedStyle(cards).height; 
    cards.style.height = fullHeight;
    setTimeout(function() {
      cards.style.height = '160px';
    }, 0);

    const style = document.querySelector('style');
    if (style) {
      document.head.removeChild(style);
    }
  }
});
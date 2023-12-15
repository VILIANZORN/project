import './../scss/main.scss';
import Swiper from '../../node_modules/swiper/swiper-bundle';

// включение выключение свайпера

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

// показать всё в слайдере
const btn = document.querySelector(".show-button");
const cards = document.querySelector(".image-slider__wrapper");

btn.addEventListener('click', function () {
  btn.classList.toggle('show-button--before');
  if (btn.innerHTML === "Показать всё") {
    btn.innerHTML = "Скрыть";
    cards.style.height = getComputedStyle(cards).height; 
    cards.style.height = 'auto'; 
    var fullHeight = getComputedStyle(cards).height; 
    cards.style.height = ''; 
    setTimeout(function() {
      cards.style.height = fullHeight;
    }, 0);
  } else {
    btn.innerHTML = "Показать всё";
    var fullHeight = getComputedStyle(cards).height; 
    cards.style.height = fullHeight;
    setTimeout(function() {
      cards.style.height = '160px';
    }, 0);
  }
});

//  читать далее 

const section_btn = document.querySelector('.section__button');
const sectionP = document.querySelector(".section__p");

section_btn.addEventListener('click', function () {
  section_btn.classList.toggle('show-button--before');
  if (section_btn.innerHTML === "Читать далее"){
    section_btn.innerHTML = 'Скрыть';
    sectionP.classList.toggle('section__p-active'); 
  } else {
    section_btn.innerHTML = "Читать далее";
    sectionP.classList.toggle('section__p-active');
    const style = document.querySelector('style');
  } 
  sectionP.style.maxHeight = sectionP.classList.contains("section__p-active") ? `${sectionP.scrollHeight}px` : "160px";
});

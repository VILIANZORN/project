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

  resizableSwiper('(max-width: 767.5px)', '.block-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  mousewheel: {
      sensitivity: 1,
      eventsTarget:".block-slider"
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoHeight: true,
  })
})



// Показать бургер меню
const burger = document.querySelector(".burger-menu");
const burgerBtnShow = document.querySelector(".burger");
const burgerBtnClose = document.querySelector(".button-close--burger");
const opacityBg = document.getElementById('div_aside');

burgerBtnShow.addEventListener('click', function(){
  burger.classList.toggle('burger-menu--click');
  opacityBg.classList.toggle('opacity-bg');
})

burgerBtnClose.addEventListener('click', function(){
  burger.classList.toggle('burger-menu--click');
  opacityBg.classList.toggle('opacity-bg');
})
  
// показать всё в слайдере ремонт техники различных брендов

const btn = document.querySelector(".show-button");
const cards = document.querySelector(".image-slider__wrapper");

btn.addEventListener('click', function () {
  btn.classList.toggle('show-button--before');
  if (btn.innerHTML === "Показать всё") {
    btn.innerHTML = "Скрыть";
    cards.classList.toggle('image-slider__wrapper--click');
  } else {
    btn.innerHTML = "Показать всё";
    cards.classList.toggle('image-slider__wrapper--click');
  }
  cards.style.height = cards.classList.contains("image-slider__wrapper--click") ? `${cards.scrollHeight}px` : "160px";
});

// показать всё в слайдере ремонт различных видов техники
const btn2 = document.querySelector(".show-button-secSlider");
const cards2 = document.querySelector(".block-slider__wrapper");

btn2.addEventListener('click', function () {
  btn2.classList.toggle('show-button--before');
  if (btn2.innerHTML === "Показать всё") {
    btn2.innerHTML = "Скрыть";
    cards2.classList.toggle('image-slider__wrapper--click');
  } else {
    btn2.innerHTML = "Показать всё";
    cards2.classList.toggle('image-slider__wrapper--click');
  }
  cards2.style.height = cards2.classList.contains("image-slider__wrapper--click") ? `${cards2.scrollHeight}px` : "160px";
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
  } 
  sectionP.style.maxHeight = sectionP.classList.contains("section__p-active") ? `${sectionP.scrollHeight}px` : "160px";
});

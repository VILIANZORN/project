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

  resizableSwiper('(max-width: 767.5px)', '.box-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  mousewheel: {
      sensitivity: 1,
      eventsTarget:".box-slider"
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoHeight: true,
  })
})

// переменные для модалок
const burger = document.querySelector(".burger-menu");
const burgerBtnShow = document.querySelector(".burger");
const burgerBtnClose = document.querySelector(".button-close--burger");
const opacityBg = document.getElementById('div-aside-burger');
const body = document.querySelector("body");

const asidePhone = document.querySelector(".aside-phone");
const phoneBtnShow1 = document.getElementById('phone-button2');
const phoneBtnShow2 = document.getElementById('phone-button1');
const phoneBtnClose = document.querySelector(".aside-phone__close-btn");
const opacityBgPh = document.getElementById('div-aside-phone');

const asideChat = document.querySelector(".aside-chat");
const chatBtnShow1 = document.getElementById('chat-button2');
const chatBtnShow2 = document.getElementById('chat-button1');
const chatBtnClose = document.querySelector(".aside-chat__close-btn");
const opacityBgCh = document.getElementById('div-aside-chat');

function hideShowBurger(){
  burger.classList.toggle('burger-menu--click');
  opacityBg.classList.toggle('opacity-bg');
  body.classList.toggle('no-scroll');
}
function hideShowPhone(){
  asidePhone.classList.toggle('aside-phone--click');
  opacityBgPh.classList.toggle('opacity-bg');
  body.classList.toggle('no-scroll');
}
function hideShowChat(){
  asideChat.classList.toggle('aside-chat--click');
  opacityBgCh.classList.toggle('opacity-bg');
  body.classList.toggle('no-scroll');
}
document.onkeydown = function (e) {
  if(e.key === "Escape"){
    if(asidePhone.classList.contains('aside-phone--click')){
      asidePhone.classList.remove('aside-phone--click');
      opacityBgPh.classList.remove('opacity-bg');
      body.classList.remove('no-scroll');
    }else if(asideChat.classList.contains('aside-chat--click')){
      asideChat.classList.remove('aside-chat--click');
      opacityBgCh.classList.remove('opacity-bg');
      body.classList.remove('no-scroll');
    }
  };
}

// Показать бургер меню
burgerBtnShow.addEventListener('click', function(){
  hideShowBurger();
})
opacityBg.addEventListener('click', function(){
  hideShowBurger();
})
burgerBtnClose.addEventListener('click', function(){
  hideShowBurger();
})

// Показать форму для телефона
phoneBtnShow1.addEventListener('click', function(){
  hideShowPhone()
})
phoneBtnShow2.addEventListener('click', function(e){
  hideShowPhone()
  if (burger.classList.contains('burger-menu--click')) hideShowBurger(); 
})
phoneBtnClose.addEventListener('click', function(){
  hideShowPhone()
})
opacityBgPh.addEventListener('click', function(){
  hideShowPhone()
})

// Показать форму для чата
chatBtnShow1.addEventListener('click', function(){
  hideShowChat()
  if (asidePhone.classList.contains('burger-menu--click'))  hideShowBurger()
})
chatBtnShow2.addEventListener('click', function(){
  hideShowChat()
  if (burger.classList.contains('burger-menu--click'))  hideShowBurger()
})
chatBtnClose.addEventListener('click', function(){
  hideShowChat()
})
opacityBgCh.addEventListener('click', function(){
  hideShowChat()
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


// import Swiper, { Pagination, Navigation } from 'swiper';

// import 'swiper/css';
// // import 'swiper/css/mousewheel';
// // import 'swiper/css/scrollbar';

// Swiper.use([Navigation, Pagination]);

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* eslint-disable */
const mainStock = new Swiper('.main-stock__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: '4',
  spaceBetween: 20,
  navigation: {
    prevEl: '.main-stock__navigation_prev',
    nextEl: '.main-stock__navigation_next',
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.main-stock__pagination',
    type: 'bullets',
  },
  breakpoints: {
    1440: {
      slidesPerView: '4',
      spaceBetween: 20,
    },
    900: {
      slidesPerView: '3',
    },
    500: {
      slidesPerView: '2',
    },
    300: {
      slidesPerView: '1',
      spaceBetween: 10,
    },
  },
});

const mainServices = new Swiper('.main-services__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: '3',
  spaceBetween: 20,
  navigation: {
    prevEl: '.main-services__navigation_prev',
    nextEl: '.main-services__navigation_next',
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.main-services__pagination',
    type: 'bullets',
  },
  breakpoints: {
    1440: {
      slidesPerView: '3',
      spaceBetween: 20,
    },
    900: {
      slidesPerView: '3',
    },
    500: {
      slidesPerView: '2',
    },
    300: {
      slidesPerView: '1',
      spaceBetween: 10,
    },
  },
});

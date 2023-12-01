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
    prevEl: '.slider-navigation_prev',
    nextEl: '.slider-navigation_next',
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.slider-pagination',
    type: 'bullets',
  },
  breakpoints: {
    1260: {
      slidesPerView: '3',
      spaceBetween: 20,
    },
    1001: {
      slidesPerView: '2',
    },
    800: {
      slidesPerView: '2.5',
      spaceBetween: 10,
    },
    700: {
      slidesPerView: '2',
    },
    600: {
      slidesPerView: '1.8',
    },
    500: {
      slidesPerView: '1.6',
    },
    430: {
      slidesPerView: '1.4',
    },
    300: {
      slidesPerView: '1',
    },
  },
});

// if (document.documentElement.clientWidth < 800) {
//   const mainAbout = new Swiper('.main-about__slider', {
//     modules: [Pagination],
//     slidesPerView: '4',
//     spaceBetween: 20,
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true,
//     grabCursor: true,
//     slideToClickedSlide: true,
//     pagination: {
//       el: '.slider-pagination',
//       type: 'bullets',
//     },
//   });
// }

let mainAbout = null;

function initSwiper() {
  if (document.documentElement.clientWidth < 800) {
    if (!mainAbout) {
      mainAbout = new Swiper('.main-about__slider', {
        modules: [Pagination],
        slidesPerView: '4',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        grabCursor: true,
        slideToClickedSlide: true,
        pagination: {
          el: '.slider-pagination',
          type: 'bullets',
        },
      });
    }
  } else {
    if (mainAbout) {
      mainAbout.destroy();
      mainAbout = null;
    }
  }
}

// Вызываем функцию при загрузке страницы
initSwiper();

// Добавляем обработчик события resize для проверки изменения размера окна
window.addEventListener('resize', () => {
  initSwiper();
});

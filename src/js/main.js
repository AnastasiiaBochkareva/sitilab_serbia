// import Swiper, { Pagination, Navigation } from 'swiper';

// import 'swiper/css';
// // import 'swiper/css/mousewheel';
// // import 'swiper/css/scrollbar';

// Swiper.use([Navigation, Pagination]);

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/* eslint-disable */
const mainStock = new Swiper('.main-stock__slider', {
  modules: [Navigation, Pagination, Autoplay],
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
  autoplay: {
    delay: 5000, // задержка между слайдами в миллисекундах (в данном случае 5 секунд)
    disableOnInteraction: false, // оставлять ли автопрокрутку после взаимодействия пользователя с слайдером
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

// блок с вопросами врачу 1й вариант
// const mainServices = new Swiper('.main-services__slider', {
//   modules: [Navigation, Pagination, Autoplay],
//   slidesPerView: '3',
//   spaceBetween: 20,
//   navigation: {
//     prevEl: '.slider-navigation_prev',
//     nextEl: '.slider-navigation_next',
//   },
//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,
//   grabCursor: true,
//   slideToClickedSlide: true,
//   pagination: {
//     el: '.slider-pagination',
//     type: 'bullets',
//   },
//   autoplay: {
//     delay: 5000, // задержка между слайдами в миллисекундах (в данном случае 5 секунд)
//     disableOnInteraction: false, // оставлять ли автопрокрутку после взаимодействия пользователя с слайдером
//   },
//   breakpoints: {
//     1260: {
//       slidesPerView: '3',
//       spaceBetween: 20,
//     },
//     1001: {
//       slidesPerView: '2',
//     },
//     800: {
//       slidesPerView: '2.5',
//       spaceBetween: 10,
//     },
//     700: {
//       slidesPerView: '2',
//     },
//     600: {
//       slidesPerView: '1.8',
//     },
//     500: {
//       slidesPerView: '1.6',
//     },
//     430: {
//       slidesPerView: '1.4',
//     },
//     300: {
//       slidesPerView: '1',
//     },
//   },
// });

if (document.documentElement.clientWidth < 1270) {
  const mainAbout = new Swiper('.main-about__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: '3',
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
    autoplay: {
      delay: 5000, // задержка между слайдами в миллисекундах (в данном случае 5 секунд)
      disableOnInteraction: false, // оставлять ли автопрокрутку после взаимодействия пользователя с слайдером
    },
    breakpoints: {
      700: {
        slidesPerView: '3',
        spaceBetween: 10,
      },
      500: {
        slidesPerView: '2',
        spaceBetween: 5,
      },
      300: {
        slidesPerView: '1',
        spaceBetween: 0,
      },
    },
  });
}

const mainReview = new Swiper('.main-review__slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: '4',
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
  autoplay: {
    delay: 5000, // задержка между слайдами в миллисекундах (в данном случае 5 секунд)
    disableOnInteraction: false, // оставлять ли автопрокрутку после взаимодействия пользователя с слайдером
  },
  breakpoints: {
    1440: {
      slidesPerView: '4',
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: '3',
    },
    900: {
      slidesPerView: '2.5',
    },
    600: {
      slidesPerView: '2',
    },
    300: {
      slidesPerView: '1',
      spaceBetween: 10,
    },
  },
});

const article = new Swiper('.article__slider ', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: '4',
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: '4',
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: '4',
    },
    900: {
      slidesPerView: '3.5',
    },
    600: {
      slidesPerView: '2.5',
    },
    376: {
      slidesPerView: '1.5',
      spaceBetween: 10,
    },
    300: {
      slidesPerView: '1.1',
      spaceBetween: 10,
    },
  },
});

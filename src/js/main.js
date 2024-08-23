// import Swiper, { Pagination, Navigation } from 'swiper';

// import 'swiper/css';
// // import 'swiper/css/mousewheel';
// // import 'swiper/css/scrollbar';

// Swiper.use([Navigation, Pagination]);

// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/* eslint-disable */
function handleDOMLoaded() {

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
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        700: {
          slidesPerView: '2.8',
          spaceBetween: 10,
        },
        500: {
          slidesPerView: '2',
          spaceBetween: 5,
        },
        300: {
          slidesPerView: '1',
        },
      },
    });
  };
  
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
    // pagination: {
    //   el: '.slider-pagination', // все заработало при отключении
    //   type: 'bullets',
    // },
    autoplay: { // перестали переключаться точки
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true, // осталось 2 точки в пагинации
    breakpoints: {
      1270: {
        slidesPerView: '4',
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: '3.5',
      },
      900: {
        slidesPerView: '2.5',
      },
      600: {
        slidesPerView: '2',
      },
      374: {
        slidesPerView: '1.3',
        spaceBetween: 10,
      },
      300: {
        slidesPerView: '1',
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
}

document.addEventListener('DOMContentLoaded', handleDOMLoaded);



// function handleDOMLoaded() {

//   if (document.documentElement.clientWidth < 1270) {
//     const mainAbout = new Swiper('.main-about__slider', {
//       modules: [Pagination, Autoplay],
//       slidesPerView: '3',
//       spaceBetween: 20,
//       observer: true,
//       observeParents: true,
//       observeSlideChildren: true,
//       grabCursor: true,
//       slideToClickedSlide: true,
//       pagination: {
//         el: '.slider-pagination',
//         type: 'bullets',
//       },
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//       },
//       breakpoints: {
//         700: {
//           slidesPerView: '2.8',
//           spaceBetween: 10,
//         },
//         500: {
//           slidesPerView: '2',
//           spaceBetween: 5,
//         },
//         300: {
//           slidesPerView: '1',
//         },
//       },
//     });
//   };
  
//   const mainReview = new Swiper('.main-review__slider', {
//     modules: [Navigation, Pagination, Autoplay],
//     slidesPerView: '4',
//     spaceBetween: 20,
//     navigation: {
//       prevEl: '.slider-navigation_prev',
//       nextEl: '.slider-navigation_next',
//     },
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true,
//     grabCursor: true,
//     slideToClickedSlide: true,
//     pagination: {
//       el: '.slider-pagination',
//       type: 'bullets',
//     },
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoints: {
//       1270: {
//         slidesPerView: '4',
//         spaceBetween: 20,
//       },
//       1000: {
//         slidesPerView: '3.5',
//       },
//       900: {
//         slidesPerView: '2.5',
//       },
//       600: {
//         slidesPerView: '2',
//       },
//       374: {
//         slidesPerView: '1.3',
//         spaceBetween: 10,
//       },
//       300: {
//         slidesPerView: '1',
//       },
//     },
//   });
  
//   const article = new Swiper('.article__slider ', {
//     modules: [Navigation, Pagination, Autoplay],
//     slidesPerView: '4',
//     spaceBetween: 20,
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true,
//     grabCursor: true,
//     breakpoints: {
//       1440: {
//         slidesPerView: '4',
//         spaceBetween: 20,
//       },
//       1000: {
//         slidesPerView: '4',
//       },
//       900: {
//         slidesPerView: '3.5',
//       },
//       600: {
//         slidesPerView: '2.5',
//       },
//       376: {
//         slidesPerView: '1.5',
//         spaceBetween: 10,
//       },
//       300: {
//         slidesPerView: '1.1',
//         spaceBetween: 10,
//       },
//     },
//   });
// }

// document.addEventListener('DOMContentLoaded', handleDOMLoaded);
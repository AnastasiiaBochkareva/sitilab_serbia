/*eslint-disable*/
// const openItem = (item) => {
//   if (!item) return;
//   item.classList.add('active');

//   const body = item.querySelector('.accordion__body');
//   body.style.maxHeight = `${body.scrollHeight}px`;
// };

// const closeItem = (item) => {
//   if (!item) return;
//   item.classList.remove('active');

//   const body = item.querySelector('.accordion__body');
//   body.style.maxHeight = null;
// };

// const clickHandler = (e) => {
//   const accordionHead = e.target.closest('.accordion__head');
//   if (!accordionHead) return;

//   const accordion = e.target.closest('.accordion');
//   const targetItem = e.target.closest('.accordion__item');
//   const activeItem = accordion.querySelector('.accordion__item.active');

//   if (targetItem !== activeItem) {
//     openItem(targetItem);
//     closeItem(activeItem);
//   } else {
//     closeItem(targetItem);
//   }
// };

// document.addEventListener('click', clickHandler);

const openItem = (item) => {
    if (!item) return;
    item.classList.add('active');

    const body = item.querySelector('.accordion__body');
    body.style.maxHeight = `${body.scrollHeight}px`;
};

const closeItem = (item) => {
    if (!item) return;
    item.classList.remove('active');

    const body = item.querySelector('.accordion__body');
    body.style.maxHeight = null;
};

const clickHandler = (e) => {
    // Проверка ширины экрана
    if (window.innerWidth > 900) return; // Если ширина больше 900px, не обрабатывать аккордеон-сайдбар

    const accordionHead = e.target.closest('.accordion__head');
    if (!accordionHead) return;

    const accordion = e.target.closest('.accordion');
    const targetItem = e.target.closest('.accordion__item');
    const activeItem = accordion.querySelector('.accordion__item.active');
    const isDisableMobileRedirect = e.target.closest(
        '.accordion-disable-mobile-redirect'
    );
    if (isDisableMobileRedirect && window.innerWidth <= 900) {
        e.preventDefault();
    }

    if (targetItem !== activeItem) {
        openItem(targetItem);
        closeItem(activeItem);
    } else {
        closeItem(targetItem);
    }
};

document.addEventListener('click', clickHandler);

/*eslint-disable*/
function showListLanguages() {
    document.addEventListener('click', (event) => {
        const { target } = event;
        const button = target.closest('.header__lang');

        if (button) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            } else {
                button.classList.add('active');
            }
        }
        const close = document.querySelector('.header__lang');
        const modal = target.closest('.header__lang_choosing');
        if (close.classList.contains('active') && !button && !modal) {
            close.classList.remove('active');
        }
    });
}
showListLanguages();

// function openDropdownMenu() {
//     const openDropdownItems = document.querySelectorAll('.header__nav-item');

//     openDropdownItems.forEach((item) => {
//         item.addEventListener('click', () => {
//             if (item.classList.contains('active')) {
//                 item.classList.remove('active');
//             } else {
//                 openDropdownItems.forEach((el) =>
//                     el.classList.remove('active')
//                 );
//                 item.classList.add('active');
//             }
//         });
//     });
// }
// openDropdownMenu();

function openDropdownMenu() {
    const openDropdownItems = document.querySelectorAll('.header__nav-item');
    openDropdownItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                openDropdownItems.forEach((el) =>
                    el.classList.remove('active')
                );
                item.classList.add('active');
            }
        });
    });
    document.addEventListener('click', () => {
        openDropdownItems.forEach((item) => {
            item.classList.remove('active');
        });
    });
}
openDropdownMenu();

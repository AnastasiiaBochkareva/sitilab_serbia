/*eslint-disable*/
// function openDropdownMainMenu() {
//     const openDropdownItems = document.querySelectorAll('.main-menu__item');
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
// openDropdownMainMenu();

function openDropdownMainMenu() {
    const openDropdownItems = document.querySelectorAll('.main-menu__item');
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
openDropdownMainMenu();

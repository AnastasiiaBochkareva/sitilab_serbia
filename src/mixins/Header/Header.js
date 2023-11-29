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
    console.log(modal);
    if (close.classList.contains('active') && !button && !modal) {
      close.classList.remove('active');
    }
  });
}
showListLanguages();

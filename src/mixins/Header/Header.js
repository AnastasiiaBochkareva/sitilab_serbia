document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.closest('.header__lang_choosing ')) {
    const parent = target.closest('.header__lang ');
    console.log(parent);
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
    } else {
      parent.classList.add('active');
    }
  }
});

function scrollToTop() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    const btnUp = target.closest('.btn-up');
    if (btnUp) {
      window.scrollTo(0, 0);
    }
  });
}
scrollToTop();

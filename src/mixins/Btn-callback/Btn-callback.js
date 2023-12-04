function showWhatsapp() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    const btnWhatsapp = target.closest('.btn-callback');
    if (btnWhatsapp) {
      if (btnWhatsapp.classList.contains('active')) {
        btnWhatsapp.classList.remove('active');
      } else {
        btnWhatsapp.classList.add('active');
      }
    }
    const close = document.querySelector('.btn-callback');
    const modal = target.closest('.btn-callback__whatsapp');
    if (close.classList.contains('active') && !btnWhatsapp && !modal) {
      close.classList.remove('active');
    }
  });
}
showWhatsapp();

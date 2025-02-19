export default function modal () {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(openButton && closeButton && containerModal) {
    function toggleModal (event) {
      event.preventDefault();
      containerModal.classList.toggle('active');
    };
  
    function closeOutside (event) {
      if(event.target === this) {
        toggleModal(event);
      }
    };
  
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', closeOutside);
  }
}

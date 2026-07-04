const activeClass = "active";

export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle(activeClass);
  }

  function clickOutsideModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (openButton && closeButton && modalContainer) {
    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickOutsideModal);
  }
}

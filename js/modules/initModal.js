export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);
    this.activeClass = "active";
    //bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  //abre/fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle(this.activeClass);
  }

  //adiciona os eventos de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha modal ao clicar do lado de fora
  clickOutsideModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  //adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}

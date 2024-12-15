class Modal {
  constructor(modalId, openBtnId, closeBtnId) {
    this.modalElement = document.getElementById(modalId);
    document.getElementById(openBtnId).addEventListener("click", () => this.openModal());
    document.getElementById(closeBtnId).addEventListener("click", () => this.closeModal());
  }

  openModal() {
    this.modalElement.classList.add('open');
  }

  closeModal() {
    this.modalElement.classList.remove('open');
  }
}

const modal = new Modal('my-modal', 'open-modal-btn', 'close-my-modal-btn');
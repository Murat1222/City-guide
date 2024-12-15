class BurgerMenu {
  constructor(burgerId, overlayId) {
    this.burgerMenu = document.getElementById(burgerId);
    this.overlay = document.getElementById(overlayId);
    this.burgerMenu.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.burgerMenu.classList.toggle('close');
    this.overlay.classList.toggle('overlay');
  }
}

const menu = new BurgerMenu('burger', 'menu');
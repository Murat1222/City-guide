class Navigation {
  constructor(navLinks) {
    this.navLinks = navLinks;
    this.addEventListeners();
  }

  handleNavLinkClick(event) {
    event.preventDefault();
    this.navLinks.forEach(link => link.classList.remove('categories__link--active'));
    event.target.classList.add('categories__link--active');
  }

  addEventListeners() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavLinkClick.bind(this));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.categories__link');
  new Navigation(navLinks);
});
class Navigation {
  constructor(navLinks) {
    this.navLinks = navLinks;
    this.addEventListeners();
  }

  handleNavLinkClick(event) {
    event.preventDefault();
    this.navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }

  addEventListeners() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavLinkClick.bind(this));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.works__nav-link');
  new Navigation(navLinks);
});
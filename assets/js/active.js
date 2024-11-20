const navLinks = document.querySelectorAll('.works__nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
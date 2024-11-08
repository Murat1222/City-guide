let slideIndex = 1;

const showSlides = (n) => {
  let slides = document.getElementsByClassName("item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length 
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};

const nextSlide = () => {
  showSlides(slideIndex += 1);
};

const previousSlide = () => {
  showSlides(slideIndex -= 1);
};

showSlides(slideIndex);





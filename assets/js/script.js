class Slider {
  constructor(slideClass) {
    this.slides = document.getElementsByClassName(slideClass);
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    for (let slide of this.slides) {
      slide.style.display = "none";
    }
    this.slides[this.slideIndex - 1].style.display = "block";
  }

  nextSlide() {
    this.showSlides(this.slideIndex += 1);
  }

  previousSlide() {
    this.showSlides(this.slideIndex -= 1);
  }
}

const slider = new Slider("item");

document.getElementById("next").addEventListener("click", () => slider.nextSlide());
document.getElementById("prev").addEventListener("click", () => slider.previousSlide());
let currentSlide = 2;

const images = document.querySelectorAll(".imageSlider");

const nextImage = () => {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[currentSlide - 1].style.display = "initial";

  if (currentSlide === images.length) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
};

setInterval(nextImage, 6000);

document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.querySelector(".slide-container");
    const slides = Array.from(document.querySelectorAll(".slide"));
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide, i) {
        if (i === index) {
          slide.style.transform = "translateX(0)";
        } else {
          slide.style.transform = "translateX(-100%)";
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    slideContainer.addEventListener("swiped-left", nextSlide);
    slideContainer.addEventListener("swiped-right", prevSlide);
  
    showSlide(currentIndex);
  });
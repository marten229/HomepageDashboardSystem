// Carousel
let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarouselItems() {
  const totalItems = carouselItems.length;
  const itemsPerView = 3;

  for (let i = 0; i < totalItems; i++) {
    if (i >= carouselIndex && i < carouselIndex + itemsPerView) {
      carouselItems[i].style.display = 'block';
    } else {
      carouselItems[i].style.display = 'none';
    }
  }
}

function carouselUmschalten(anzahl) {
  const totalItems = carouselItems.length;
  const itemsPerView = 3;
  
  carouselIndex += anzahl;
  if (carouselIndex < 0) {
    carouselIndex = totalItems - itemsPerView;
  } else if (carouselIndex >= totalItems) {
    carouselIndex = 0;
  }
  showCarouselItems();
}

showCarouselItems();

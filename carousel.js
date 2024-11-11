export function addSlide(imgSrc, dogId) {
  const carouselItem = $("<div>");
  carouselItem.addClass("carousel-item");
  carouselItem.css("background-image", `url(${imgSrc})`)
  carouselItem.data("dogId", dogId);

  const carousel = $(".carousel-inner");
  carousel.append(carouselItem);
}

export function start() {
  $(".carousel-item").first().addClass("active");
}

export function clear() {
  $(".carousel-inner").empty();
}
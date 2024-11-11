import { addSlide, clear, start } from "./carousel.js";
import { getDogs, getLikes, like } from "./dogs.js";

async function run() {
  $(".carousel-control-favorite").on("click", likeDog);
  $(".carousel-control-see-favorites").on("click", seeLikedDogs);
  $(".carousel-control-roll").on("click", getRandomDogs);

  await getRandomDogs();
}

async function likeDog() {
  const dogId = $(".active").data("dogId");
  await like(dogId);
}

async function seeLikedDogs() {
  clear();
  const likedDogs = await getLikes();
  for (const dog of likedDogs) {
    addSlide(dog.url, dog.id);
  }
  start();
}

async function getRandomDogs() {
  clear();
  const dogs = await getDogs();
  for (const dog of dogs) {
    addSlide(dog.url, dog.id);
  }
  start();
}

run();

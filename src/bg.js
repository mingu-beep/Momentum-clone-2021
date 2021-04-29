const body = document.querySelector("body");

const IMG_Number = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImages");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_Number);
  return number;
}

function init() {
  const randomNumber = getRandom();

  paintImage(randomNumber);
}
init();

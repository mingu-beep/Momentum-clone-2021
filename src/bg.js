const body = document.querySelector("body");

const IMG_Number = 5;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.addEventListener("loaded", handleImgLoad);
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

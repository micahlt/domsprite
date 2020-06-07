window.addEventListener('load', renderSprites);
let floor;

let renderSprites = () => {
  floor = document.getElementsByClassName('ds_floor')[0];
  for (let i = 0; i < document.getElementsByClassName('ds_object').length; i++) {
    spriteFall(document.getElementsByClassName('ds_object')[i]);
  }
}

let spriteFall = (sprite) => {
  let vel = 1;
  while (!isCollide(sprite, floor)) {

  }
}

/* let move = (sprite, direction, velocity) => {
  if (direction)
} */

let isCollide = (a, b) => {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(
    ((aRect.top + aRect.height) < (bRect.top)) ||
    (aRect.top > (bRect.top + bRect.height)) ||
    ((aRect.left + aRect.width) < bRect.left) ||
    (aRect.left > (bRect.left + bRect.width))
  );
}
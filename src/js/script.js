const body = document.body;
const themeBtn = document.querySelector(".navbar__list--button");
const themeIcon = document.querySelector(".theme--icon");
const trailLeft = document.querySelector(".trail__color--left");
const trailRight = document.querySelector(".trail__color--right");

let trailBlue = true;

const toggleTrailColor = function () {
  if (trailBlue) {
    trailLeft.style = "stop-color: #ff7a18; stop-opacity: 1;";
    trailRight.style = "stop-color: #af002d; stop-opacity: 1;";
  } else {
    trailLeft.style = "stop-color: #1316c2; stop-opacity: 1;";
    trailRight.style = "stop-color: #650e8d; stop-opacity: 1;";
  }

  trailBlue = !trailBlue;
};

const toggleIcon = function () {
  themeIcon.classList.toggle("fa-lightbulb");
  themeIcon.classList.toggle("fa-moon");
};

themeBtn.addEventListener("click", function () {
  body.classList.toggle("light--mode");
  toggleTrailColor();
  toggleIcon();
});

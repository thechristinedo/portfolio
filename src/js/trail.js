const svg = document.querySelector(".trail");
const path = document.querySelector(".trail__path");

let points = [];
let segments = 100;
let coords = {
  x: 0,
  y: 0,
};

const move = function (e) {
  const x = e.clientX;
  const y = e.clientY;

  coords.x = x;
  coords.y = y;

  if (points.length === 0) {
    for (let i = 0; i < segments; i++) {
      points.push({
        x: x,
        y: y,
      });
    }
  }
};

const animate = function () {
  // Current mouse
  let pointerX = coords.x;
  let pointerY = coords.y;

  // Go through each traveled coords
  points.forEach((point, index) => {
    point.x = pointerX;
    point.y = pointerY;

    let next = points[index + 1];

    if (next) {
      pointerX = pointerX - (point.x - next.x) * 0.4;
      pointerY = pointerY - (point.y - next.y) * 0.4;
    }
  });

  path.setAttribute(`d`, `M ${points.map((p) => `${p.x} ${p.y}`).join(` L `)}`);

  requestAnimationFrame(animate);
};

const resize = function () {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  svg.style.width = windowWidth + "px";
  svg.style.height = windowHeight + "px";
  svg.setAttribute("viewBox", `0 0 ${windowWidth} ${windowHeight}`);
};

document.addEventListener("mousemove", move);
window.addEventListener("resize", resize);

animate();
resize();

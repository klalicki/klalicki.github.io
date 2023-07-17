import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import Two from "two.js";
// initialize color-mix plugin
extend([mixPlugin]);

const animData = {
  colorA: colord("blue"),
  colorB: colord("green"),
  points: [],
  initialLife: 120,
  maxStack: 30,
  curMousePos: { x: 0, y: 0 },
  motionSpeed: 10,
  winHeight: window.innerHeight,
  yOffset: 0,
  lastPoint: { x: -100, y: -100, countdown: 0 },
};
const touchData = {
  active: false,
  currentTouches: [],
};
const twoOptions = {
  fullscreen: true,
  type: Two.Types.canvas,
};

// initialize Two.js and attach it to the document
const two = new Two(twoOptions);
two.appendTo(document.querySelector("main"));

/* HELPER FUNCTIONS */

/**
 * Helper function that clamps a number to a specific range
 * @param val - The value to clamp.
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns val if it is within range, otherwise returns min or max
 */
const clampToRange = (val, min, max) => {
  return Math.min(Math.max(min, val), max);
};

/**
 * Reads color values from the document object, transforms them using colord, and updates the animation parameters.
 */
const getColors = () => {
  animData.colorA = colord(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--color-accent-b"
    )
  )
    .alpha(0.25)
    .saturate(100);
  animData.colorB = colord(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--color-accent-a"
    )
  )
    .alpha(0)
    .saturate(100);
  // console.log(colorA, colorB);
};
window.updateAnimColors = getColors;
/* EVENT LISTENERS: */

// add event listener to window.resize event, update animation parameter (used for fade-out as user scrolls)
document.addEventListener("resize", (e) => {
  animData.winHeight = window.innerHeight;
});

// listen to scroll event, use it to update animation offset value
const handleScroll = () => {
  animData.yOffset = document.querySelector("main").scrollTop;
};
document.querySelector("main").addEventListener("scroll", handleScroll);

function drawCircle(x, y, r) {
  const thisCircle = two.makeCircle(x, y, r);
  thisCircle.noStroke();
  return thisCircle;
}

getColors();
// window.setInterval(getColors, 300);

const addPoint = (x, y, dx, dy) => {
  animData.points.push({
    x: x,
    y: y + animData.yOffset,
    dx: dx,
    dy: dy,
    life: animData.initialLife,
    initialOpacity: 1,
    circle: drawCircle(x, y, 10),
  });
};

const addPointMouse = () => {
  addPoint(
    animData.curMousePos.x,
    animData.curMousePos.y,
    animData.curMousePos.dx / animData.motionSpeed,
    animData.curMousePos.dy / animData.motionSpeed
  );
};

const handleMouse = ({ movementX, movementY, pageX, pageY }) => {
  animData.curMousePos.x = pageX;
  (animData.curMousePos.y = pageY),
    (animData.curMousePos.dx = movementX),
    (animData.curMousePos.dy = movementY);
};

const handleTouchMove = (e) => {
  touchData.active = true;
  let touches = e.touches;
  let touchCount = touches.length;
  touchData.currentTouches = [];

  for (let i = 0; i < touchCount; i++) {
    let touch = touches.item(i);
    let touchX = touch.pageX;
    let touchY = touch.pageY;
    touchData.currentTouches.push({ x: touchX, y: touchY });
  }
  // console.log(touchData.currentTouches);
};
document.addEventListener("touchmove", handleTouchMove);
const handleTouchEnd = () => {
  touchData.active = false;
};
document.addEventListener("touchend", handleTouchEnd);
document.addEventListener("mousemove", handleMouse);
const addTouchPoints = () => {
  // console.log(`number of new points is: ${touchData.currentTouches.length}`);
  if (touchData.active) {
    while (touchData.currentTouches.length > 1) {
      //remove a random point
      let index = Math.floor(Math.random() * touchData.currentTouches.length);
      touchData.currentTouches.splice(index, 1);
    }
    touchData.currentTouches.forEach((touch) => {
      addPoint(touch.x, touch.y, 0, 0);
    });
  }
};

const drawFrame = () => {
  addTouchPoints();
  // console.log(`total number of points is ${animData.points.length}`);

  // check to make sure mouse is not in the top left corner (and ignore it if)
  if (!(animData.curMousePos.x == 0 && animData.curMousePos.y == 0)) {
    if (
      animData.curMousePos.x == animData.lastPoint.x &&
      animData.curMousePos.y == animData.lastPoint.y
    ) {
      if (animData.lastPoint.countdown > 0) {
        animData.lastPoint.countdown = animData.lastPoint.countdown - 1;
        addPointMouse();
      }
    } else {
      animData.lastPoint.countdown = animData.maxStack;

      addPointMouse();
    }
  }

  animData.lastPoint.x = animData.curMousePos.x;
  animData.lastPoint.y = animData.curMousePos.y;

  animData.points.forEach((point) => {
    //handle each point
    point.x += point.dx;
    point.y += point.dy;
    point.circle.position.x = point.x;
    point.circle.position.y = point.y - animData.yOffset;
    const lifeStage = point.life / animData.initialLife;
    let fadeOut = 5 - (4 * point.y) / animData.winHeight;
    fadeOut = clampToRange(fadeOut, 0, 1);
    // console.log(fadeOut);
    const newColor = animData.colorA
      .mix(animData.colorB, lifeStage)
      .alpha((lifeStage / 4) * fadeOut)
      .toHex();
    point.circle.fill = newColor;
    point.circle.radius = animData.initialLife - point.life;
    point.life = point.life - 1;
    if (point.life < 1) {
      two.remove(point.circle);
    }
  });
  while (animData.points.length > 0 && animData.points[0].life < 1) {
    animData.points.shift();
  }
  two.update();
  window.requestAnimationFrame(drawFrame);
};
drawFrame();

/* RANDOM POINT GENERATOR SECTION: */

const addRandomPointGroup = () => {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dxBase = Math.random() * 4 - 2;
  let dyBase = Math.random() * 4 - 2;
  for (let i = 0; i < 5; i++) {
    let dx = Math.random() * dxBase;
    let dy = Math.random() * dyBase;
    addPoint(x, y, dx, dy);
  }
};
const addRandomPointGroups = (maxQty) => {
  let qty = Math.floor(Math.random() * maxQty);
  for (let i = 0; i < qty; i++) {
    addRandomPointGroup();
  }
};
const randomPointGenerator = () => {
  //stop it from generating points if there are already some queued up
  if (animData.points.length < 10) {
    addRandomPointGroups(5);
  }

  const nextTimeout = Math.random() * 2000 + 1000;
  window.setTimeout(randomPointGenerator, nextTimeout);
};
randomPointGenerator();

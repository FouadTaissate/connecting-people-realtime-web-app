let ioServer = io();

// Geef deze client een random kleur
const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 5));
let colorR = randomBetween(0, 255);
let colorG = randomBetween(0, 255);
let colorB = randomBetween(0, 255);

// canvas setup
function setup() {
  createCanvas(1850, 750);
  background(235, 235, 235);
}

ioServer.on("mouse", (mouseData) => {
  noStroke();
  fill(mouseData.colors[0], mouseData.colors[1], mouseData.colors[2]);
  ellipse(mouseData.x, mouseData.y, 25, 25);
});

function newDrawing(dataNew) {
  noStroke();
  fill(colorR, colorG, colorB);
  ellipse(mouseX, mouseY, 25, 25);

  var dataNew = {
    x: mouseX,
    y: mouseY,
    colors: [colorR, colorG, colorB],
  };

  ioServer.emit("newMouse", dataNew);
}

function mouseDragged() {
  noStroke();
  fill(colorR, colorG, colorB);
  ellipse(mouseX, mouseY, 25, 25);

  var mouseData = {
    x: mouseX,
    y: mouseY,
    colors: [colorR, colorG, colorB],
  };

  ioServer.emit("mouse", mouseData);
}

// drawing function
function draw() {}

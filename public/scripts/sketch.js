var socket;

// canvas setup
function setup() {
  createCanvas(1850, 750);
  // background(0, 100, 200);
}

function mouseDragged() {
  console.log(mouseX + "," + mouseY);

  var mouseData = {
    x: mouseX,
    y: mouseY,
  };
}

// drawing function
function draw() {
  fill(232, 182, 0);
  ellipse(mouseX, mouseY, 30, 30);
}

var socket;

// canvas setup
function setup() {
  createCanvas(1850, 750);
  background(235, 235, 235);
}

function mouseDragged() {
  console.log(mouseX + "," + mouseY);

  noStroke();
  fill(232, 182, 0);
  ellipse(mouseX, mouseY, 25, 25);

  var mouseData = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", mouseData);
}

// drawing function
function draw() {}

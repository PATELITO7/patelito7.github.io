var xLocation = 100;
var yLocation = 100;
var xSpeed = 0;
var ySpeed = 0;


function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    xSpeed = xSpeed + 10;
  }
  if(keyCode ==UP_ARROW) {
    ySpeed = ySpeed - 10;
  }
  if(keyCode ==LEFT_ARROW) {
    xSpeed = xSpeed - 10;
  }
  if(keyCode == DOWN_ARROW) {
    ySpeed = ySpeed + 10;
  }
}

function draw() {
  // green background
  background(0, 255, 0);

  //red fill
  fill(255, 0 ,0);
  // blue edge
  stroke(0, 0, 255);

  //increase edge size
  strokeWeight(4);

  //draw ellipse
  ellipse(xLocation, yLocation, 50, 50);

xLocation = xLocation + xSpeed;
yLocation = yLocation + ySpeed;

textSize(20);
strokeWeight(1);
text(xSpeed, 100, 20);
text(ySpeed, 150, 20);
}

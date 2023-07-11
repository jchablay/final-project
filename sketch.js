//The setup function only happens once
function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(200,216,230); //an RGB color for the canvas' background
  //circle
  stroke(156,100,35,60); // an RGB color for the circle's border
  fill (random(100,175),255,random(130,200),150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,55, 55); // center of canvas, 20px dia
  rect(80,45,45,23); //
}

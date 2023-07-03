function setup() {
  createCanvas(600,600);
background("rgba(0,0,0,0.95)");
}
function draw() {
  fill("white")
  if(mouseIsPressed)
  rect(mouseX,mouseY,20,30);
  stroke("black");
}
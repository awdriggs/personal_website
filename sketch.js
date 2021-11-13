let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //g = random(255);
  frame = 0;
}

function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
  background(0);
  
  g = floor(map(cos(frameCount/100), -1, 1, 0, 255));
  b = floor(sin(frameCount/100), -1, 1, 0, 255));
  
  for(let x = 0; x < width; x += 10){
    r = map(x, 0, width, 0, 255);
    for(let y = 0; y < height; y+=10){
    //let g = map(y, 0, height, 0, 255);
    fill(r,g,b);
    rect(x, y, width/100, width/100);
    }
  }
  

  fill(255);
  text(g, 20, 20);
  text(b, 20, 40);
  //loop over height
  
  //increase blue value
  
}
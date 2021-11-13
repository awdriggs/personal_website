let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  g = random(255);
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
  
  for(let x = 0; x < width; x += 10){
    let r = map(x, 0, width, 0, 255);
    for(let y = 0; y < height; y+=10){
    //let g = map(y, 0, height, 0, 255);
    fill(r,g,b);
    rect(x, y, width/100, width/100);
    }
  }
  
  b = map(sin(frameCount/100), -1, 1, 0, 255);

  //loop over height
  
  //increase blue value
  
}
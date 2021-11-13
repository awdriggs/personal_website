let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight); //sets canvas to fill entire screen
  noStroke();
  frame = 0;
}

function draw() {
  background(0);
  
  g = floor(map(cos(frameCount/100), -1, 1, 0, 255)); //g value is cos of frames
  b = floor(map(sin(frameCount/100), -1, 1, 0, 255)); //b value is sine of frames
  
  for(let x = 0; x < width; x += 10){ //loops through canvas, draws little squares
    for(let y = 0; y < height; y+=10){
      r = map(y, 0, width, 255, 0);
      //let g = map(y, 0, height, 0, 255);
      fill(r,g,b);
      rect(x, y, 10, 10);
    }
  }
  
//   fill(255);
//   text(g, 20, 20);
//   text(b, 20, 40);
  
}
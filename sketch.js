let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
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
    for(let y = 0; y < height; y+=10){
    fill(r,g,b);
    rect(x, y, width/100, width/100);
    }
  }

  //loop over height
  
  //increase blue value
  
}
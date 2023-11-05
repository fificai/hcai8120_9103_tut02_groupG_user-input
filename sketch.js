
let number = 30;
let rectSpacing = 10;
const numberOfaqua = 8;
const colors = ['#08527d', '#1678A2', '#093169'];
const colors2 = ['#Bffbfd', '#083360', '#2a91a4'];
let sketchScale = 1;
let previousWindowWidth;
let previousWindowHeight;
let offsetY=0;
let offsetX = 0;
let cols=["red","yellow","blue"]


let rech = [] // horizontal rectangle
let recv = [] // vertical rectangle
let rectanglesBig = [];
let bgColor = 0

function setup() {
  createCanvas(windowWidth, windowHeight);

  background('#000a0c');

  let y1 = random(0, 150);
  let y2 = y1;
  rectMode(CENTER);


  // Use width and height instead of width and height in rectangles below:
  // Top four aqua lines:
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(width*1.5, i * y1, width, 15, '#Bffbfd');
    rech.push(aquaRectangle);
  }
  // Last four horizontal aqua lines:
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(width*1.5, 250 + i * y1 * 2, width, 15, '#Bffbfd');
    rech.push(aquaRectangle);
  }


  // Left three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(i * y1, height*1.5, 15, height, '#Bffbfd');
    recv.push(aquaRectangle);
  }
  // Right three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(250 + i * y1 * 2, height*1.5, 15, height, '#Bffbfd');
    recv.push(aquaRectangle);
  }

  // Random small blocks:

  // 2
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(y2, height+i * (50 + rectSpacing), 15, 15, randomColor);
    recv.push(randomRectangle);
  }

  // 4
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 - y1 * 2, height+(i * (50 + rectSpacing)), 15, 15, randomColor);
      recv.push(randomRectangle);
    }
  }
  // 5
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(250 + y1 * 2, height+i * (35 + rectSpacing), 15, 15, randomColor);
    recv.push(randomRectangle);
  }
  // 6
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 + y1 * 2,height+ (i * (80 + rectSpacing)), 15, 15, randomColor);
      recv.push(randomRectangle);
    }
  }

  // 7
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(width+i * (50 + rectSpacing), y1 - y1, 15, 15, randomColor);
      rech.push(randomRectangle);
    }
  }
  // 8
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (30 + rectSpacing), y2, 15, 15, randomColor);
    rech.push(randomRectangle);
  }
  // 9
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(width+i * (60 + rectSpacing), y1 + y1, 15, 15, randomColor);
      rech.push(randomRectangle);
    }
  }
  // 10
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (30 + rectSpacing), y1 + y1 + y1, 15, 15, randomColor);
    rech.push(randomRectangle);
  }

  // 11
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (60 + rectSpacing), 250, 15, 15, randomColor);
    rech.push(randomRectangle);
  }
  // 12
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (30 + rectSpacing), 250 + y1 * 2, 15, 15, randomColor);
    rech.push(randomRectangle);
  }
  // 13
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (50 + rectSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rech.push(randomRectangle);
  }
  // 14
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(width+i * (40 + rectSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rech.push(randomRectangle);
  }

  noStroke();

  for (let i = 0; i < 15; i++) {
    // Randomly generate the position, size, and colour of block A:


    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);

    // Randomly generate the size of blocks B and C:
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colours:

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);


    // Create a block object and add it to an array:

    rectanglesBig.push(new Rectangle(width+x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(width+x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(width+x, y, widthB, heightB, colorB));

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  background(bgColor);
  textAlign(CENTER)
  fill(100)
  // Draw rectangle:
  for (let i = 0; i < recv.length; i++) {
    recv[i].draw();

   
    if(offsetY<height){
      recv[i].y-=1;
    }

  }
  for (let i = 0; i < rech.length; i++) {
    rech[i].draw();

    if(offsetX<width){
      rech[i].x-=1;
    }
  }
  push();

  for (let i = 0; i < rectanglesBig.length; i++) {
    rectanglesBig[i].draw();
    if(offsetX<width){
      rectanglesBig[i].x-=1;
    }

  }
  // pop();
  offsetX+=1
  offsetY+=1

  fill(100,20,104,90)
  circle(mouseX,mouseY,50)

  
}

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(this.color);
    if(abs(this.x-mouseX)<this.width/2 && abs(this.y-mouseY)<this.height/2){
      fill(random(cols))
    
    }
    rect(this.x, this.y, this.width, this.height);
  }
}
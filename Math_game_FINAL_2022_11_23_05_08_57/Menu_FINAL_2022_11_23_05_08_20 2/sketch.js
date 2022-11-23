
let image_background
let button
let screen = 0
let bgcolor=(255,0,0)
var imgA;

function preload() {
  image_background = loadImage('racecar background.jpg')
 
}

function setup() {
  createCanvas(1920, 1080)
  image(image_background, 0,0, width, height)
  noLoop()
  frameRate(10);
  
}

function draw() {
  
   let col = color(207,50,50)
   let col2 = color(329,81,81)
   let col3 = color(178,48,48)
   let col4 = color(89,92,102)
  
  textAlign(CENTER,CENTER)
  textStyle(BOLDITALIC)
  textSize(50)
  fill(155,7,7)
  text('FMS RACEWAY', 963, 120)//what's the name of our game again?
  
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(20)
  fill(0,0,0)
  
  button1 = createButton('Matching Game')
  button1.position(320,225)
  button1.style('font-size', '30px');
  button1.style('color', '#736868');
  button1.style('background-color', col2);
  button1.size(300,300)
  button1.mousePressed(page_match)
  
  button2 = createButton('Maze Game')
  button2.style('font-size', '30px');
  button2.style('color', '#E6D9D9');
  button2.style('background-color', col);
  button2.position(816,225)
  button2.size(300,300)
  button2.mousePressed(page_maze)
  
  button3 = createButton('Math Game')
  button3.position(1300,225)
  button3.style('font-size', '30px');
  button3.style('color', '#E1E1E1');
  button3.style('background-color', col3);
  button3.size(300,300)
  button3.mousePressed(page_math)
  
  button4 = createButton('CREDITS')
  button4.position(790,650)
  button4.style('font-size', '25px');
  button4.style('color', '#8F9CCF');
  button4.style('background-color', col4);
  button4.size(350,65)
  button4.mousePressed(page_credits)
}

function page_credits() {
  let col = color(89,92,102)
  button1.hide()
  button2.hide()
  button3.hide()
  button4.hide()  
  
  text('FMS Menu created by Han Nguyen and Shatalya Kelley', 961, 200)
  text('Matching Game created by Esteban Abundis',912, 240)
  text('Maze Game created by Shatalya Kelley', 885, 280)
  text('Math Game created by Han Nguyen', 869, 320)
  text('Edits completed by Esteban Abundis', 878, 360)
  
  button5 = createButton('Back')
  button5.position(790,500)
  button5.style('font-size', '35px')
  button5.style('color', '#8F9CCF');
  button5.style('background-color', col);
  button5.size(350,65)
  button5.mousePressed(reset_menu)
}

function page_match() {
  window.open('https://editor.p5js.org/estabundis/full/b_QC1TLH3')
}

function page_maze() {
  window.open('https://editor.p5js.org/estabundis/full/L41R7GNyP')
}

function page_math() {
  window.open('https://editor.p5js.org/estabundis/full/OiAIInpVa')
}

function reset_menu() {
  window.location.reload()
}
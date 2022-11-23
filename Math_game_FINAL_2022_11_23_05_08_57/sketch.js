let img; 
let numCar;
let numShown;
let subtitle = "HOW MANY RACING CARS ARE THERE?"
let screen = 0;
var clicks = 0;
let subtitle2 = "Click until the screen shows the correct number of racing cars."
let subtitle3 = "Current count:"
let correct = "Congrats! You're right!"
let wrong = "Uh-oh. Click reset to try again."


function setup() {
  createCanvas(1920, 1080);
  background(242, 186, 116)
  img = loadImage('1.png'); // Load the image
  
  numCar = int(random(3,6));
  
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(20)
  fill(0,0,0)
  
  text(subtitle, 1920/2, 100)
  text(subtitle3, 1920/2, 200)
  text(subtitle2, 1920/2, 140)
  
  button3 = createButton('Click Count')
  button3.position(1920/2 - 50,290)
  button3.mousePressed(clicksCount)
  
  button1 = createButton('Reset');
  button1.position(1920/2 - 120, 290);
  button1.mousePressed(resetcount);
  
  button2 = createButton('Check');
  button2.position(1920/2 + 60, 290);
  button2.mousePressed(check);
  
}

function resetcount() {
  clicks = 0
  clicksCount()
}

function check() {
  background(242, 186, 116)
  img = loadImage('1.png');
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(20)
  fill(0,0,0)
  
  if (clicks == numCar) {
    
    text(correct, 1920/2, 200)
  }
  else {
    text(wrong, 1920/2, 200)    
  }
}
  

function draw() {

    if (numCar == 3) {
     image (img, 200, 300, img.width/1.5, img.height/1.5);
     image (img, 800, 300, img.width/1.5, img.height/1.5);
     image (img, 1400, 300, img.width/1.5, img.height/1.5);
    } 

    else if (numCar == 4) {
     image (img, 400, 250, img.width/1.5, img.height/1.5);
     image (img, 1200, 250, img.width/1.5, img.height/1.5);
     image (img, 400, 550, img.width/1.5, img.height/1.5);
     image (img, 1200, 550, img.width/1.5, img.height/1.5);
    }
  
    else if (numCar == 5) {
     image (img, 200, 250, img.width/1.5, img.height/1.5);
     image (img, 800, 250, img.width/1.5, img.height/1.5);
     image (img, 1400, 250, img.width/1.5, img.height/1.5); 
     image (img, 400, 550, img.width/1.5, img.height/1.5);
     image (img, 1100, 550, img.width/1.5, img.height/1.5);
    }
  
    else {
     image (img, 200, 250, img.width/1.5, img.height/1.5);
     image (img, 800, 250, img.width/1.5, img.height/1.5);
     image (img, 1400, 250, img.width/1.5, img.height/1.5);
     image (img, 200, 550, img.width/1.5, img.height/1.5);
     image (img, 800, 550, img.width/1.5, img.height/1.5);
     image (img, 1400, 550, img.width/1.5, img.height/1.5);
    }   
 
  //COUNTING

}
  
function clicksCount() {
  //add 1 to variable clicks
  background(242, 186, 116)
  img = loadImage('1.png');
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(20)
  fill(0,0,0)
  
  text(subtitle, 1920/2, 100)
  text(subtitle3, 1920/2, 200)
  text(subtitle2, 1920/2, 140)
  
  clicks ++;
    noStroke();
    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
  //displaying number of clicks
    text(clicks, width/2, 250);
    fill(0, 102, 153);
  

}






 var backgroundImg
var basketball, basketballImg


function preload (){
backgroundImg=loadImage("assets/sky background.jpg")
basketballImg=loadImage("assets/basketball.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  basketball=createSprite(100, 400, 50, 50);
basketball.addImage("ball",basketballImg)
basketball.scale= 0.4
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}
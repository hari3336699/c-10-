var ship;ship_moving;
var sea,seaImg;
function preload(){
  
  ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg=loadAnimation("sea.png");


}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,40,100,10)
  ship.addAnimation("moving",ship_moving);
  sea=createSprite(400,400,400,20);
  sea.addImage(seaImg);
  sea.velocityX=-3;
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2
  }
}
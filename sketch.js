 var seaImg ,sea ,shipImg ,ship;
function preload(){
  seaImg = loadAnimation("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addAnimation("oceano",seaImg);
  sea.scale = 0.2;
  ship = createSprite(200,170);
  ship.addAnimation("barco",shipImg);
  ship.scale = 0.2;
  sea.velocityX = -10;
}

function draw() {
  background(rgb(135,206,255));
  drawSprites();
  if(sea.x <-10){
    sea.x = 300;
  }
}
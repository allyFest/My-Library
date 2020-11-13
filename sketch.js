var fixedRect, movingRect;
var fixedRect2, movingRect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(100, 100, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  movingRect2 = createSprite(400, 100,80,30);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  movingRect2.velocityX = -5;
  fixedRect2.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff (movingRect, fixedRect);
  bounceOff (movingRect2, fixedRect2)
 
  drawSprites();
}


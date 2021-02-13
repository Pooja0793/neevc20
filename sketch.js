var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(10,200,100,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor= "red";
  }
  else{
    fixedRect.shapeColor = "green";
   movingRect.shapeColor= "green";
  }

  drawSprites();
}





var fixedRect,movingrect,obj1;
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect= createSprite(340,300,40,40);
 obj1=createSprite(200,240,60,50);
 obj1.shapeColor= "blue";
fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x =World.mouseX;
  movingRect.y =World.mouseY;
 if(isTouching(movingRect,obj1)){
   movingRect.shapeColor="orange";
   obj1.shapeColor="black";
   
  
 }
 else{movingRect.shapeColor="yellow";obj1.shapeColor="yellow";}
 
  drawSprites();
}
  function isTouching(object1,object2) {
    if( (object1.x-object2.x < object2.width/2 + object1.width/2) &&
    (object2.x-object1.x < object2.width/2 + object1.width/2) &&
    (object1.y-object2.y < object2.height/2 + object1.height/2) &&
    (object2.y-object1.y < object2.height/2 + object1.height/2) ) 
    { return true  }
    else{return false }
  }

var soilder; 
var soilderImage,groundImage;
var invisibleGround;
var ground;







function preload() {
   
  soilderImage = loadImage("image-1.png");
  groundImage = loadImage("ground2.png");
}
  function setup(){
    createCanvas(1200,800);
    soilder= createSprite(40, 799,40,10);
    soilder.addImage("soldier",soilderImage);
     soilder.scale=0.5;

     ground = createSprite(200,750,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,800,400,10);
  invisibleGround.visible = false;
    
  }
  
function draw(){
  background("white");
  
  if (keyDown("space")) {
    soilder.velocityY=-7;
  }
  soilder.velocityY=soilder.velocityY+0.8;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  soilder.collide(invisibleGround);

  soilder.collide(ground);
    
  
  
 
  drawSprites();
  
  
}








var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
   
   ghost = createSprite(200,200,50,50);
   ghost.scale = 0.3;
   ghost.addImage("ghost",ghostImg);
  
  climbersGroup = new Group();
  
  invisibleBlockGroup = new Group();

  }

function draw() {
  background(200);
  if (gameState == "play"){
  
  spawndoors();
  if(tower.y > 400){
      tower.y = 300
    }
 
  if(keyDown("left_arrow")){
  ghost.x = ghost.x - 1;
  }

  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 1;
    }
  
    if(keyDown("space")){
    ghost.velocityY = -5; 
    }
    
    ghost.velocityY = ghost.velocityY + 0.8;

    if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
    }
 
    if(invisibleBlockGroup.isTouching(ghost)||
    ghost.y > 600);
    {
    ghost.destroy();
    gameState = "end";
    }


  drawSprites();
  }
  if(gameState == "end"){
  text("gameover",300,300)
  }}
  function spawndoors(){
  if (frameCount % 150 == 0){
  door = createSprite(200,50);
  door.addImage("door",doorImg);
  door.x = Math.round(random(120,400));
  door.velocityY = 1;
  door.lifetime = 999;
  climber = createSprite(200,120)
  climber.addImage("grade",climberImg);
  climber.x = door.x;
  climber.velocityY = 1;
  climber.lifetime = 999;
  climbersGroup.add(climber);
  invisibleBlock = createSprite(200,140);
  invisibleBlock.velocityY = 1;
  invisibleBlock.x = door.x;
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlockGroup.add(invisibleBlock);
  ghost.depth = door.depth;
  ghost.depth += 1;
}
}
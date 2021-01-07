var PLAY=1;
var END=0;

var gameState=PLAY;

var knief;
var alien;
var fruit1,fruit2,fruit3,fruit4;
var gameOver;

var kniefImage;
var alien_move;
var fruit,fruit1Image,fruit2Image,fruit3Image,fruit4Image;
var gameOverImage;

var enemyGroup;
var fruit1Group;
var fruit2Group;
var fruit3Group;
var fruit4Group;


var score=0;

function preload(){
 alien_move=loadAnimation("alien1.png","alien2.png");
 kniefImage=loadImage("sword.png");
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
fruit3Image=loadImage("fruit3.png");
fruit4Image=loadImage("fruit4.png");
gameOverImage=loadImage("gameover.png");
}


function setup() {
createCanvas(600,600);
 
  
knief=createSprite(300,300,20,50);
knief.addImage("knief",kniefImage);
knief.scale=0.51;
  
 
  
enemyGroup=createGroup();
fruitGroup=createGroup();
fruit1Group=createGroup();
fruit2Group=createGroup();
fruit3Group=createGroup();
fruit4Group=createGroup();

}


function draw(){
background("black");

  
  

  

 

 
   

  
  if(gameState===PLAY) {
  knief.y=World.mouseY;
  knief.x=World.mouseX;
  knief.addImage("knief",kniefImage);
    spawnAlien();
  spawnFruits();
    
  }
  
  
  if (gameState===END) {
  fruitGroup.setVelocityEach(0);
  enemyGroup.setVelocityEach(0);
  }
  
if(knief.isTouching(enemyGroup)) {
gameState=END;

enemyGroup.destroyEach();
fruitGroup.destroyEach();
knief.visible=false;
knief.addImage("gameOver",gameOverImage);
knief.x=200;
knief.y=200;
  
}
  
  if(gameState===END) {
  gameOver =createSprite(300,300,20,30);
  gameOver.addImage("gameOver",gameOverImage);
  gameOver.scale=1.2;
  }
  
 if(knief.isTouching(fruit1Group)) {
 score=score+2;
fruit1Group.destroyEach();
   
 }
 if(knief.isTouching(fruit2Group)) {
 score=score+3;
fruit2Group.destroyEach();
   
 }
   if(knief.isTouching(fruit3Group)) {
 score=score+1;
fruit3Group.destroyEach();
   
 }
   if(knief.isTouching(fruit4Group)) {
 score=score+5;
fruit4Group.destroyEach();
   
 }
    
  
  
  
  
drawSprites(); 

fill("Red");  
textSize(20);
text("score : "+score,500,50);
}

function spawnAlien () {
 
 if(frameCount%200===0) { 
  alien=createSprite(400,200,20,20);
 alien.addAnimation("moving",alien_move);
 alien.y=Math.round(random(100,300));
 alien.velocityX=-8;
 alien.setLifetime=50;
  
enemyGroup.add(alien);
 }  
}

function fruit1() {
var fruit1=createSprite(600,Math.round(random(30,350)),10,10)  
fruit1.addImage("fruit1",fruit1Image);
fruit1.scale=0.2;
 fruit1.velocityX=-14;
fruit1.setLifetime=50;
fruit1Group.add(fruit1);
}

function fruit2() {
var fruit2=createSprite(600,Math.round(random(90,450)),10,10)  
fruit2.addImage("fruit2",fruit2Image);
  fruit2.scale=0.2;
 fruit2.velocityX=-13;
fruit2.setLifetime=50;
fruit2Group.add(fruit2);
}

function fruit3() {
var fruit3=createSprite(600,Math.round(random(20,250)),10,10)  
fruit3.addImage("fruit3",fruit3Image);
  fruit3.scale=0.2;
 fruit3.velocityX=-11;
fruit3.setLifetime=50;
fruit3Group.add(fruit3);
}

function fruit4() {
var fruit4=createSprite(600,Math.round(random(60,150)),10,10)  
fruit4.addImage("fruit4",fruit4Image);
  fruit4.scale=0.2;
 fruit4.velocityX=-15;
fruit4.setLifetime=50;
fruit4Group.add(fruit4);
}











function spawnFruits() {
var select_fruit=Math.round(random(1,4));

  if(frameCount%30===0) { 
   if(select_fruit===1){
    fruit1(); 
   }else if(select_fruit===2){
    fruit2(); 
   }else if(select_fruit===3){
    fruit3(); 
   }else {
     fruit4();
   }
  } 

  
  
  
  
}









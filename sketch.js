var garden, gardenImg;
var cat, catImg;
var mouse, mouseImg; 

function preload() {
gardenImg = loadImage("images/garden.png"); 
catImg = loadImage("images/cat1.png");
mouseImg = loadImage("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3 = loadImage("images/cat4.png");
mouseImg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(400,270);
    garden.addImage("garden", gardenImg);
    

    mouse = createSprite(200,500,10,10);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.1;
    
    cat = createSprite(750,470,10,10);
    cat.addImage("cat",catImg);
    cat.scale = 0.17;

}

function draw() {

    background(255);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      mouse.addImage("mouseHappy",mouseImg3);
      mouse.changeImage("mouseHappy")
      cat.addImage("catHappy",catImg3);
      cat.changeImage("catHappy");

    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catTeased",catImg2);
    cat.changeAnimation("catTeased");
    cat.velocityX = -3;
}
  


}

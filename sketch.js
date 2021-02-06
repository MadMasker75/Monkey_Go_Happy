var monkey,monkey_running,monkeydead;
var banana,bananaimg;
var bg,bgimg;
var stone,stoneimg;

function preload(){
   
  bgimg = loadImage("jungle.png");
  
   monkey_running = 
    loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  bananaimg = loadImage("Banana.png");
  stoneimg = loadImage("stone");
  bgimg = loadImage("jungle");
 
}

function setup() {
  createCanvas(400, 600);
  
  monkey = createSprite(100,350,100,100);
  monkey.addAnimation("running",monkey_running);
  
  bg = createsprite(400,1200,200,200);
  bg.x = bg.width /2;
  
}

function draw() {
  background(220);
  
  drawSprites();
}
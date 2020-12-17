const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var score = 0;

var gameState = "onSling";


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(690,273,250,10);
  box1 = new Box(630,235,50,60);
  box2 = new Box(660,235,50,60);
  box3 = new Box(690,235,50,60);
  box4 = new Box(720,235,50,60);
  box5 = new Box(750,235,50,60);
  box6 = new Box(660,190,50,60);
  box7 = new Box(690,190,50,60);
  box8 = new Box(720,190,50,60);
  box9 = new Box(690,125,50,60);
  polygon = new Bird(150,250,40,40);
    

    slingshot = new Slingshot(polygon.body,{x:150, y:250});
}

function draw() {
  Engine.update(engine);
  background(50); 
text("SCORE: "+score,750,40)
ground.display(); 
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
polygon.display();
slingshot.display();
}

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched"
}

function keyPressed(){

  if(keyCode === 32){
  
  slingshot.attach(polygon.body);
  
  }
  
  }
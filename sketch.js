
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Making the paper ball
	paper = new Paper(80,300,35);

	//Making the ground
	ground = new Ground(400,650,800,20);
	
	//making dustbin boxes 
	box1 = new Box(550,555,20,130);
	box2 = new Box(650,630,200,20);
	box3 = new Box(750,555,20,130)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
   drawSprites();
	
   //display all elements
   paper.display();

   ground.display();

   box1.display();
   box2.display();
   box3.display();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-50,y:-50})
	}
}




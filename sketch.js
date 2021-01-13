
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,roof2,roof3,roof4,roof5;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof1 = new Roof(400,200,75,20);
	 roof2 = new Roof(325,200,75,20);
	 roof3 = new Roof(475,200,75,20);
	 roof4 = new Roof(250,200,75,20);
	 roof5 = new Roof(550,200,75,20);

	bob1 = new Bob(400,550,25);
	bob2 = new Bob(325,550,25);
	bob3 = new Bob(475,550,25);
	bob4 = new Bob(250,550,25);
	bob5 = new Bob(550,550,25);

	 rope1 = new Rope(roof1.body,bob1.body);
	 rope2 = new Rope(roof2.body,bob2.body);
	 rope3 = new Rope(roof3.body,bob3.body);
	 rope4 = new Rope(roof4.body,bob4.body);
	 rope5 = new Rope(roof5.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		bob4.velocityX = 8;
	}
}


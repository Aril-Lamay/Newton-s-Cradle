
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

//declaring the variables
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//creating the different class objects
	roof = new Roof(380,120,400,40);

	bob1 = new Bob(220,320,40);
	bob2 = new Bob(300,320,40);
	bob3 = new Bob(380,320,40);
	bob4 = new Bob(460,320,40);
	bob5 = new Bob(540,320,40);

	rope1 = new Rope(bob1.body,{x:220,y:120});
	rope2 = new Rope(bob2.body,{x:300,y:120});
	rope3 = new Rope(bob3.body,{x:380,y:120});
	rope4 = new Rope(bob4.body,{x:460,y:120});
	rope5 = new Rope(bob5.body,{x:540,y:120});
	
	//running the engine
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("silver");
	
  //displaying the class objects
  roof.display();
 
  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();
  
  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-80});
	}
	}
	



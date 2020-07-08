var paper1;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    paper1=new Paper(100,600);
    //ground=new Ground(400,height,200,20);
	engine = Engine.create();
	world = engine.World;

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  
  
 paper1.display();
 ///ground.display();
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG,sceneImg;
var packageBody,ground
var wall,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	sceneImg=loadImage("Bunker.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	scene=createSprite(400,350,200,200);
    scene.addImage("Scene",sceneImg);
 	scene.scale=1.3
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(480, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false;

	wall=createSprite(500,630,20,130);
	wall.shapeColor="red";
	wall2=createSprite(572,685,160,20);
	wall2.shapeColor="red";
	wall3=createSprite(645,630,20,130);
	wall3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(480 , 100 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.visible=false;
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20; 
	translation={x:-20,y:0
	} 
	Matter.Body.translate(packageBody, translation)
 }
  else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0} 
	Matter.Body.translate(packageBody, translation) 
}
 else if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(packageBody,false); } 
}






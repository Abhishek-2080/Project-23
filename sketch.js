const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground;
var side1,side2,side3;
var engine,world;
var package_options;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	
	Engine.run(engine);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.7;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true,restitution:0.5},package_options);
	World.add(world, packageBody);
	
	//package1 = new Package(width/2,200);
	side1 = new Box(400,650,200,20);
	side2 = new Box(310,590,20,100);
	side3 = new Box(490,590,20,100);
	
	ground = new Ground(400,675,800,30);
	
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
   Engine.update(engine);


   packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
   drawSprites();
   
   side1.display(); 
   side3.display();
   side2.display();
  
	 ground.display();
	 
   }

 


function keyPressed() {
	if (keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(packageBody,false);
		//packageBody.velocityY=5;
		
	var package_options={
		isStatic:false
		
	}	
}

}


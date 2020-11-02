
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var elasticObj;
var stone, ground, tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

function preload()
{
  boyImg = loadImage("sprites/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(150,480,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	elasticObj = new elastic(stone,{x:235,y:420})

	stone = new Stone(80,400,40);
	ground = new Ground(400,550,800,20);
	tree = new Tree(350,2,450,550);

	mango1 = new Mango(500,400,30);
	mango2 = new Mango(500,300,30);
	mango3 = new Mango(600,200,20);
	mango4 = new Mango(500,200,40);
	mango5 = new Mango(650,300,30);
	mango6 = new Mango(500,200,20);
	mango7 = new Mango(550,400,40);
	mango8 = new Mango(550,200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  stone.display();
  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	elasticObj.fly();   
}

function keyPressed() 
{
	if (keyCode === 32) 
	{
      Matter.Body.setPosition(stone, {x:235, y:420}) 
	  elasticObj.attach(stone);
	}
}

function detectollision(lstone,lmango)
{
	mangoPos = lmango.body.position
	stonePos = lstone.body.position

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)

	if (distance<=lmango.r+lstone.r)
		{
		  Matter.Body.setStatic(lmango.body , false);
		} 
}





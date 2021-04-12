const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 400, 1493, 20);

  hero = new Hero(12,300,100);
  rope = new Rope(hero.body, { x: 100, y: 200 });
  monster = new Monster(800,90,300);

  box1 = new Box(300, 100, 40, 40);
  box2 = new Box(400, 100, 40, 40);
  box3 = new Box(500, 100, 40, 40);
  box4 = new Box(600, 100, 40, 40);
  box5 = new Box(450,100,40, 40);
  box6 = new Box(450,103,40,40);
  box7 = new Box(400,104,40,40);
  box8 = new Box(300,105,40,40);
  box9 = new Box (300,110,40,40);
  box10 = new Box(300,120,40,40);
  box11 = new Box(400,110,40,40);
  box12 = new Box(400,115,40,40);
  box13 = new Box(300,120,40,40);
  box14 = new Box(400,120,40,40);
  box15 = new Box(400,125,40,40);
  box16 = new Box(300,125,40,40);

}

function draw() {
  background(bg);
  Engine.update(engine);
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
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}



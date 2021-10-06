const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine , world;

var object , ground;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
      isStatic:true
  }
  
  var object_options = {
      restitution:1
  }
  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  
  ground = Bodies.rectangle(0,350,400,50,ground_options);
  World.add(world , ground);

}

function draw() {
  Engine.update(engine);
  background(0);  
  rect(object.position.x , object.position.y , 50 , 50);
  rect(ground.position.x , ground.position.y , 400 , 50);
}
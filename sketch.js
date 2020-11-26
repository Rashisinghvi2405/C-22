const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var r_engine, r_world;

function setup() {
  createCanvas(400,400);

  r_engine = Engine.create();
  r_world = r_engine.world;

 var ob1_options = {
   isStatic : true 
 }
 
  ob1 = Bodies.rectangle(200,380,400,20 , ob1_options);
  World.add(r_world , ob1 );
  console.log(ob1);
  console.log(ob1.position.x);

  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,200,15, ball_options);
  World.add(r_world, ball);
}

function draw() {
  background("black");  

 Engine.update(r_engine);

  rectMode(CENTER);
  fill("brown");
  rect(ob1.position.x , ob1.position.y , 400, 20 );

  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15, 15);
  
}
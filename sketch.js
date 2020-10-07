const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var ground_option;

var ball
var ball_options;

function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

ball_options = {
  restitution : 1
}
ground_option = {
  isStatic : true
}

ground= Bodies.rectangle(200,390,50,50,ground_option);

World.add(world,ground);


ball = Bodies.circle(180,200,40,ball_options);

World.add(world,ball);
}


function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);


}
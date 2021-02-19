const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,50);
    box1 = new Box(800,320,70,70);
    box2 = new Box(1020,320,70,70);
    box3 = new Box(800,220,70,70);
    box4 = new Box(1020,220,70,70);
    box5 = new Box(910,120,70,70);
    piggy1 = new Piggy(910,350);
    piggy2 = new Piggy(910,250);
    log1 = new Log(910,260,300,PI/2);
    log2 = new Log(910,160,300,PI/2);
    log3 = new Log(860,100,150,PI/7);
    log4 = new Log(970,100,140,PI/-7);
    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(200,300,400,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ground2.display();
    piggy1.display();
    piggy2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}
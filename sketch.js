const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var PolygonImg,Polygon;
function preload(){
    PolygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    //stand1.start
    stand1= new Ground(800,500,250,25)
    //stand1/layer1
    box1 = new Box(700,480,30,40)
    box2 = new Box(730,480,30,40)
    box3 = new Box(760,480,30,40)
    box4 = new Box(790,480,30,40)
    box5 = new Box(820,480,30,40)
    box6 = new Box(850,480,30,40)
    box7 = new Box(880,480,30,40)
    box8 = new Box(910,480,30,40)
    //stand1//layer2
    box9 = new Box(730,440,30,40)
    box10 = new Box(760,440,30,40)
    box11 = new Box(790,440,30,40)
    box12 = new Box(820,440,30,40)
    box13 = new Box(850,440,30,40)
    box14 = new Box(880,440,30,40)
    //stand1/layer3
    box15 = new Box(760,400,30,40)
    box16 = new Box(790,400,30,40)
    box17 = new Box(820,400,30,40)
    box18 = new Box(850,400,30,40)
    //stand1/layer4
    box19 = new Box(790,360,30,40)
    box20 = new Box(820,360,30,40)
    //stand1/top
    box21 = new Box(805,320,30,40)
    //stand1.end
    Polygon = new polygon(200,400,50,50)
    rope = new SlingShot(Polygon.body,{x:200,y:400})
}

function draw(){
    background(0)
    Engine.update(engine);
    //stand1.start
    stand1.display();
    //stand1/layer1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    //stand1/layer2
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    //stand1/layer3
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    //stand1/layer4
    box19.display();
    box20.display();
    //stand1/top
    box21.display();
    //stand1.end
    Polygon.display();
    rope.display();

}

function mouseDragged(){

    Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(Polygon.body);
    }
}
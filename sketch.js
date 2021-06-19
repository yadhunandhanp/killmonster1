const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function preload(){
    bg=loadImage("GamingBackground.png")
    sup=loadImage("Superhero-01.png")
    mon=loadImage("Monster-01.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball=Bodies.circle(200,300,80,80)
    World.add(world,ball)
    monster=Bodies.circle(1000,300,80,80)
    World.add(world,monster)
    ground = new Ground(600,height,1200,20);
    box1=new   BOX(900,100,50,50)
    box2=new   BOX(900,100,50,50)
    box3=new   BOX(900,100,50,50)
    box4=new   BOX(900,100,50,50)
    box5=new   BOX(900,100,50,50)
    box6=new   BOX(900,100,50,50)
    box7=new   BOX(800,100,50,50)
    box8=new   BOX(800,100,50,50)
    box9=new   BOX(800,100,50,50)
    box10=new   BOX(800,100,50,50)
    box11=new   BOX(800,100,50,50)
    box12=new   BOX(700,100,50,50)
    box13=new   BOX(700,100,50,50)
    box14=new   BOX(700,100,50,50)
    box15=new   BOX(700,100,50,50)
    box16=new   BOX(700,100,50,50)
    box17=new   BOX(700,100,50,50)
    box18=new   BOX(700,100,50,50)
    box19=new   BOX(700,100,50,50)
    box20=new   BOX(700,100,50,50)
    box21=new   BOX(600,100,50,50)
    box22=new   BOX(600,100,50,50)
    box23=new   BOX(600,100,50,50)
    box24=new   BOX(600,100,50,50)
    box25=new   BOX(600,100,50,50)
    box26=new   BOX(600,100,50,50)
    rope=new    SlingShot(ball,{x:500,y:50})

    //getTime();
    //log6 = new Log(230,180,80, PI/2);
    
}


function draw(){
   
    Engine.update(engine);
  background(bg)
 // imageMode(CENTER)
 image(sup,ball.position.x,ball.position.y,80,80) 
 image(mon,monster.position.x,monster.position.y,80,80) 
  
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
 box17.display();
box18.display();
 box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
rope.display();
















}

function mouseDragged(){
Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})    
      
    
}


function mouseReleased(){
    
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}



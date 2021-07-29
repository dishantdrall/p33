var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;
 
var particle;
var particles = [particle];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var line;
var gameState = "play";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var i = 0; i <=800; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,40);
  fill(255);

  textSize(35);
  text(" 500 ",5,550);
  text(" 500 ",80,550);
  text(" 500 ",160,550);
  text(" 500 ",240,550);
  text(" 100 ",320,550);
  text(" 100 ",480,550);
  text(" 200 ",400,550);
  text(" 200 ",560,550);
  text(" 200 ",640,550);
  text(" 200 ",720,550);
 
  if( gameState==="END"){
    background("black");
    fill("red");
    textSize(100);
    text("GAME OVER",200,400);
  }
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  if(particle!=null){
    if(particle.body.position.y>700){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5) gameState="END";
      }
  
  
      else if (particle.body.position.x< 600 && particle.body.position.y>301){
        score = score+100;
        particle=null;
        if(count>=5)gameState="END";
  
      }
      else if (particle.body.position.x<900 && particle.body.position.x>601){
        score = score+200;
        particle=null;
        if(count>=5) gameState="END";
      }
    }}
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount


  //display the particles 
  /*for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }*/

}
function mousePrseed(){
  if(gameState !== "END"){
    count++;
    particle = new particle(mousex,50,10,10);
  }
}
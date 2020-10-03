var wall,bullet;
var speed,weight;
var thickness;

function setup() {

  createCanvas(1600,400);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22.83);
  
  bullet  = createSprite(50 , 200 , 100 , 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
}

function draw() {

  background(100,0,0);
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){

      wall.shapeColor = color(255,0,0);

    }
    if(damage < 10){

      wall.shapeColor = color(0,255,0);
      
    }

  }

  drawSprites();
}
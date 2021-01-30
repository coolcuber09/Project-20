var car,wall;
var speed,weight; 

function setup() 
{
    createCanvas(1200,400);
   
    //speed=random(55,170)
   // weight=random(400,1000)
    speed=90;
    weight=600;
    //car=createSprite(950,200,50,50);
    car=createSprite(950,200,50,50);
    wall=createSprite(1000,200,60,200);
    wall.shapeColor=color(0,80,0);
    car.velocityX=90;
    if(wall.x-car.x < (car.width+wall.width)/2)
    {
      car.velocityX=0;
      var deformation = 0.5 * weight * speed * speed/22500;
     
      if(deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }

    if (deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    } 
      if(deformation<100)
      {
        car.shapeColor=color(0,255,0);
      }

    } 
    drawSprites();
  }
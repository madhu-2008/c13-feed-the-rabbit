var garden,rabbit;
var gardenImg,rabbitImg;
var apple, apple_png;
var leaf, leaf_png;





function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  apple_png = loadImage("apple.png");

  leaf_png = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  rabbit.x = mouseX;
var rand=Math.round(random(1,2))
console.log(rand)
if(rand ===1){
  spawnleafs()
}
else{
  spawnApples();
}
 
  drawSprites();
 
}


  function spawnApples()
  {

    if (frameCount % 80 == 0)
    {
    
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(apple_png);
    apple.scale=0.1
    apple.velocityY = 5
    apple.lifetime = 134

    }

    



    }
    function spawnleafs()
     {
       if (frameCount % 80 == 0) 
       {
      leaf = createSprite(random(50,350),40,10,10)
      leaf.addImage(leaf_png);
      leaf.velocityY = 5
      leaf.lifetime=134
      leaf.scale=0.1
       }

  }
   




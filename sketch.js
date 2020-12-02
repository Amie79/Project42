const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world;
var thunder,thunder1,thunder2,thunder3,thunder4;
var umbrella;
var maxdrops=100;
var drops=[];
var rand;

function preload(){
 thunder1=loadImage("images/thunderbolt/1.png");
 thunder2=loadImage("images/thunderbolt/2.png");
 thunder3=loadImage("images/thunderbolt/3.png");
 thunder4=loadImage("images/thunderbolt/2.png");
    
}

function setup(){
    engine=Engine.create();
    world=engine.world;
   createCanvas(500,650);

   umbrella=new Umbrella(200,450);

if(frameCount % 150 === 0){

        for(var i=0; i<maxdrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));

    if(frameCount%100===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,350), random(10,50), 10, 10);
         
         var rand = Math.round(random(1,4));
         switch(rand) {
           case 1: thunder.addImage(thunder1);
                   break;
           case 2: thunder.addImage(thunder2);
                   break;
           case 3: thunder.addImage(thunder3);
                   break;
           case 4: thunder.addImage(thunder4);
                   break;
          
           default: break;
         }
        }

    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update()
}   
}


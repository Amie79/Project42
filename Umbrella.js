class Umbrella{

    constructor(x,y){

        var options={
            isStatic:true
        }

        this.image=loadImage("images/Walking Frame/walking_1.png");

        this.shade=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.shade);
    }

    display(){
        var pos=this.shade.position;
        imageMode(CENTER);
        this.image(this.shade.pos.x,this.shade.pos.y,500,500);
    }
}
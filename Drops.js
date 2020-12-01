class Drop{
    constructor(x,y){
      
    var options={
        friction:0.004,
        restitution:0.4
    }    

    this.rain=Bodies.circle(x,y,10,options);
    this.r=10;
    World.add(world,this.rain);
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x: random(0,400), y:random(0,400)})
        }
    }

    display(){
        var position=this.rain.position;
        fill(28,5,243);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.rain.r,this.rain.r);
    }
}
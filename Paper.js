class Paper{
    constructor(x,y,r){
        var options = {
            'density': 1.2,
            'friction' : 0.5,
            isStatic: false,
            'restitution': 0.3
        }
        this.x=x;
		this.y=y;
        this.radius = r;
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options)
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}


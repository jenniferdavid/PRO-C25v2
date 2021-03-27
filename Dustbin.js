class Dustbin
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(x, y, width, height , options);
        this.width=width
		this.height=height
        this.image = loadImage("dustbingreen.png")
 		World.add(world, this.body);
	}
    
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius, this.radius);
            pop()		
	}
}



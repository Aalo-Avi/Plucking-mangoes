class Mango
{
    constructor(x,y,radius)
    {
        var options={
            isStatic:true,
            friction:1,
            restitution:0
        }
        this.x = x;
        this.y = this.y;
        this.radius = this.radius;
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.circle(x,y,radius,options);
    }

    display()
    {
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(IMAGE);
        image(this.image, 0, 0, this.radius, this.radius);
        pop()
    }
}
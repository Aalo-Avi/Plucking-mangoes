class Stone
{
    constructor(x,y,radius)
    {
      var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
      } 
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);  
      this.image = loadImage("sprites/stone.png");
      
      World.add(world,this.body);
    }

    display()
    {
      var a = this.body.position;

      push()
      translate(a.x,a.y);
      imageMode(IMAGE);
      image(this.image, 0, 0, this.radius, this.radius);
      pop()
    }
}
class Roof
{

    constructor(x,y,width,height)
    {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
   display()
   {
       var roofpos = this.body.position

       push();
       fill("white");
       rectMode(CENTER);
       translate(roofpos.x,roofpos.y,this.width,this.height);
   }
}
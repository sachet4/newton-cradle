class Rope
{

    constructor(bodyA,bodyB)
    {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            lenght : 10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.body);
    }
    display()
    {
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.body.position.y);
    }
}
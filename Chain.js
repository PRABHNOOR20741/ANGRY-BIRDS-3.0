class Chain
{
    //making the constructor and giving the bodyA,bodyB
  constructor(bodyA,bodyB)
  {
      //adding the options and variables
     var options = {
     bodyA : bodyA,
     bodyB : bodyB,
     stiffness : 0.04,
     length : 10

     } 

     //creating a constraint and adding options
     this.chain = Constraint.create(options);

     //adding this to the World file
     World.add(world,this.chain);
  }  

  display()
  {
      //name spacing 
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;

     //making a line between bodyA and bodyB
     strokeWeight(3);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}
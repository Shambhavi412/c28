class Boy
{
    constructor(x,y,width,height)
{

    var options = {
        //isStatic : true,
        friction : 0.4
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("boy.png")
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)





}

display()
{
    var position = this.body.position;
    push();
    translate(position.x,position.y)
    imageMode(CENTER);
    //fill("brown")
    //strokeWeight(4)
    //stroke("black")
    image(this.image,0,0,this.width,this.height);
pop();

}
}
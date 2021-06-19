class BOX{
constructor(x,y,width,height){
    var opt={
        restitution: 0.02,
        friction: 0.01,
        density: 2 


    }
    this.body=Bodies.rectangle(x,y,width,height,opt)
    World.add(world,this.body)
    this.width=width
    this.height=height
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    fill('white')
    rect(0,0,this.width,this.height)
    pop()
}

}
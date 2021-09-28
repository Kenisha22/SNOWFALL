class Snow{
    constructor(){
        var options={isStatic:false}
        this.snow=Bodies.circle(random(1,800),10,20,options)
        World.add(world,this.snow)
    }
    display(){
        imageMode(CENTER)
        image(snowimg,this.snow.position.x,this.snow.position.y,20,20)
    }
}
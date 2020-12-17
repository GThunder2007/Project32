class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.4,
            'friction':0.4,
            'density':0.5
        }
     this.body  = Bodies.rectangle(x,y,width,height,options)  
     this.width = width;
     this.height = height;
     this.Visiblity = 255;
        World.add(world,this.body)
    }
    score(){
        if (this.Visiblity < 0 && this.Visiblity > -201){
          score++;
          console.log()
        }
      }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
    if(this.body.speed < 3){
            translate(pos.x,pos.y);
            rotate(angle);
            strokeWeight(2);
            stroke(0)
            fill("lightpink")
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
           }
        else{
         tint(255,this.Visiblity);
         this.Visiblity = this.Visiblity - 5;
         World.remove(world, this.body);

    }
    pop();
}




}
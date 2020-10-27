class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       
        translate(pos.x, pos.y);
        rotate(angle);
        if(this.body.speed > 3){
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           
          pop()
         
             
            
          }
function score(){
  if(this.visibility<0 && this.visibility>-105){
    score++
  }
}
         }
         
       }
       
        
      


class Box{
  constructor(x,y,width,height){
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
      var p = this.body.position;
      rectMode(CENTER);
      stroke("#3da060");
      fill("#3da060");
      rect(p.x,p.y,this.width,this.height);
  }
}
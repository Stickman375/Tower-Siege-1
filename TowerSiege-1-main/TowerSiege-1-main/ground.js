class Ground{
    constructor() {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,ground_options);
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
      noStroke();
      fill(170,83,40);
      rectMode(CENTER);
      rect(pos.x, pos.y, 900, 20);
    }
  };

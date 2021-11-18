
import Function from "./Function.js";

const Robot = function(name){
    this.name = name;
    this.movingStrategy = null;
    this.attackStrategy = null;
}

Robot.method("getName",function(){
    return this.name;
});

Robot.method("setName",function(name){
    this.name = name;
});

Robot.method("move",function(){
    movingStrategy.move();
});

Robot.method("attack",function(){
    attackStrategy.move();
});

Robot.method("setMovingStrategy",function(movingStrategy){
    this.movingStrategy = movingStrategy;
});

Robot.method("setAttackStrategy",function(attackStrategy){
    this.attackStrategy = attackStrategy;
});


export default Robot;
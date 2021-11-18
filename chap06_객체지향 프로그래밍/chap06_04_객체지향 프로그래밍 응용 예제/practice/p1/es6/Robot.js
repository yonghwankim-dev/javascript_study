class Robot{
    constructor(newName){
        let name = newName;
        let movingStrategy = null;
        let attackStrategy = null;

        this.getName = function(){
            return name;
        }
        this.setName = function(newName){
            name = newName;
        }
        this.move = function(){
            movingStrategy.move();
        }
        this.attack = function(){
            attackStrategy.attack();
        }
        this.setMovingStrategy = function(newMovingStrategy){
            movingStrategy = newMovingStrategy;
        }
        this.setAttackStrategy = function(newAttackStrategy){
            attackStrategy = newAttackStrategy;
        }
    }
}

export default Robot;
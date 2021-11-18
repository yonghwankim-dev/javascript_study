import Robot from "./Robot.js";
import Atom from "./Atom.js";

const inherit = function(Parent, Child){
    const F = function(){};

    return function(Parent, Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
}();

inherit(Robot, Atom);
const atom = new Atom();
atom.setName("atom");
atom.setMovingStrategy();


console.log(atom.getName());



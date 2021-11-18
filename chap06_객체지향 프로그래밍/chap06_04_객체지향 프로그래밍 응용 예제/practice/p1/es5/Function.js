Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}

export default Function.prototype.method;




function wrap(object, method, wrapper){
    const fn = object[method];

    return object[method] = function(){
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arguments)));
    };
}

Function.prototype.original = function(value){
    this.value = value;
    console.log("value : " + this.value);   // Expected Output : value : zzoon
}

const mywrap = wrap(Function.prototype, "original", function(orig_func, value){
    this.value = 20;
    orig_func(value);
    console.log("wrapper value : " + this.value);   // wrapper value : zzoon
});

const obj = new mywrap("zzoon");
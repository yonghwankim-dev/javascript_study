function each(obj, fn, args){
    if(obj.length==undefined){
        for(let i in obj){
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }else{
        for(let i=0; i<obj.length; i++){
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }
    return obj;
}

each([1,2,3], function(idx, num){
    console.log(idx + " : " + num); // 0:1 1:2 2:3
});

const zzoon = {
    name : "zzoon",
    age : 30,
    sex : "male"
};

each(zzoon,function(idx, value){
    console.log(idx + " : " + value);
    // name : zzoon
    // age : 30
    // sex : male
});
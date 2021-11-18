function fact(num){
    if(num==0){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

console.log(fact(10)); // Expected Output : 3628800

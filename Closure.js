// Closure is a function that has access to the outer function's scope even after the outer function has returned.

// Example 1 : Add numbers using Closure

var sum = function(a){
    console.log("Live Viewers : " + a);

    var c = 4;
    return function(b){
       return a+b+c;
    }
}

var store = sum(2); // Calling 
console.log(store); // Output : [Function]
console.log(store(5)); // Output : 12


// Example 2 : Big Example of Closure with calculations 

var add = function(a){
    return function(b){
        return a+b;
    }
}

var sub = function(a){
    return function(b){
        return a-b;
    }
}

var mul = function(a){
    return function(b){
        return a*b;
    }
}

var div = function(a){
    return function(b){
        return a/b;
    }
}

var result = add(5)(5);
console.log("Addition : " + result);

var result = sub(5)(5);
console.log("Substraction : " + result);

var result = mul(5)(5);
console.log("Multiplication : " + result);

var result = div(5)(5);
console.log("Division : " + result);

// Example 3 : Sumof 2 , 3 , 4 numbers using Closure
var sum = function(a, b, c, d){
    return {
        sum1: function(){
            return a + b;
        },
        sum2: function(){
            return a + b + c;
        },
        sum3: function(){
            return a + b + c + d;
        }
    }
}

var result = sum(2, 3, 4, 5);
console.log(result.sum1()); // Output: 5

result = sum(2, 3, 4, 5);
console.log(result.sum2()); // Output: 9

result = sum(2, 3, 4, 5);
console.log(result.sum3()); // Output: 14

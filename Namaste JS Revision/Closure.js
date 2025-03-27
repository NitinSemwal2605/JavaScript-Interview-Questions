// Closure = Function + Lexical Scope

function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    a = 100; 
    return y;
}

var z = x();
console.log(z);

z();

// Output: It will Print 100 not 7 because of closure.
// Closure = Function + Lexical Scope
// Lexical Scope = Variable Object + Scope Chain
// Scope Chain = Variable Object + all parent Variable Object


// Or can  be written as:

function x(){
    var a= 7;
    return function y(){
        console.log(a);
    }
    
}

var z = x();
console.log(z);

z();


// Example 2: Now We will see how closure works with multiple functions.

function z(){
    var b = 900;
    function x(){
        var a= 7;
        function y(){
            console.log(a,b);
        }
        a = 100;
        return y;
    }
    return x;
}

var z1 = z();
var z2 = z1();
z2();

// Output: 100 900
// Execution Steps:
// 1. z() is called and it returns x() function.
// 2. z1 is assigned x() function.
// 3. z1() is called and it returns y() function.
// 4. z2 is assigned y() function.
// 5. z2() is called and it prints 100 900.


// Example 3 : SetTimeout + Closure 

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },1000);
    console.log('Namaste JavaScript');
}
x();0

// Output: Namaste JavaScript 1

// Example 4 : SetTimeout + Closure by applying closure concept.

function x(){
    for(var i=1; i<=5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log('Namaste JavaScript');
}
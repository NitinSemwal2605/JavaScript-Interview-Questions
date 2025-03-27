function a(){
    b();
    function b(){
        console.log("Hello");
    }
}

var aa = 10;
console.log("Example 1 :"+ aa);

// Execution Steps :
// 1. Global Execution Context is created.
// 2. x() is called.
// 3. x() Execution Context is created.
// 4. c() is called.
// 5. c() Execution Context is created.
// 6. console.log("Hello") is called.
// 7. c() Execution Context is removed.
// 8. x() Execution Context is removed.
// 9. z is printed.



// Example 2 :

function x(){
    y();
    function y(){
        z();
        function z(){
            console.log("Hello");
        }
    }
}

x();

// Execution Steps :
// 1. Global Execution Context is created.
// 2. x() is called.
// 3. x() Execution Context is created.
// 4. y() is called.
// 5. y() Execution Context is created.
// 6. z() is called.
// 7. z() Execution Context is created.
// 8. console.log("Hello") is called.


// Example 3 : For Accessing the Variables in lexical scope.

function xyz(){
    var a = 1000;
    function abc(){
        console.log("Output from Lexical Scope is :" +a);
    }
    abc();
}

xyz();


// Example 4 : Scope Chain

var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";

        console.log(innerVar);  // ✅ Accessible
        console.log(outerVar);  // ✅ Accessible
        console.log(globalVar); // ✅ Accessible
    }

    innerFunction();
    // console.log(innerVar); // ❌ ReferenceError (Not accessible)
}

outerFunction();
// console.log(outerVar); // ❌ ReferenceError (Not accessible)

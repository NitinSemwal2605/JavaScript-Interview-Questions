// Var Cannot be accessed before declaration in the same scope but can be accessed in the inner scope.

/* TDZ starts
console.log(a);  // ❌ ReferenceError
let a = 10;      // TDZ ends
console.log(a);  // ✅ 10
*/

/* Window Object
var ab = 10;
console.log(window.ab); // 10
*/


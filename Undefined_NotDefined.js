// Undefined means a variable has been declared, but has not been assigned a value.
// Not Defined means a variable has not been declared.

// Example 1: Undefined

let x;
console.log(x); // Output: undefined

// Example 2: Not Defined

console.log(y); // Output: ReferenceError: y is not defined

// Example 3: Undefined vs. Not Defined

let z;
console.log(z); // Output: undefined

console.log(a); // Output: ReferenceError: a is not defined

// In the above example, `z` is declared but not assigned a value, so it is `undefined`.
// However, `a` is not declared at all, so it is `not defined`.


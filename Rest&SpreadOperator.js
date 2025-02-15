// Rest Operator - The Rest Operator (...) allows us to collect multiple arguments into a single array. It is useful when a function needs to handle a variable number of inputs.
// Spread Operator - It is used to split up array elements or object properties.


// Rest Operator

function sumofNumbers(a,b,c, ...others){
    console.log(others); // [4,5,6]
    console.log(others[1]); // 5
    return a+b+c;
}

const result = sumofNumbers(1,2,3,4,5,6); // 4,5,6 will be ignored here 
console.log(result); // 6


// Spread Operator

var names = ['Yashasvi', 'Rohit', 'Rahul','Virat', 'Rishabh'];

function getNames (a,b,c,d){
    console.log(a,b,c,d);
}
getNames(...names); // Yashasvi Rohit Rahul Virat


// Spread Operator with Objects

var person = {
    name: 'Yashasvi',
    age: 24
}

var personDetails = {
    ...person,
    city: 'Bangalore',
    country: 'India'
}

console.log(personDetails); 


// Rest Operator with Objects

var {name, ...rest} = personDetails;
console.log(name); // Yashasvi
console.log(rest); // { age: 24, city: 'Bangalore', country: 'India' }
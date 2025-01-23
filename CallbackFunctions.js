// Callback function is a function that is passed as an argument to another function, to be “called back” at a later time.


// Example 1 - Fetching data from server

function fetchData(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => callback(data));
}
console.log('Fetching data from server...');

setTimeout(() => {
    callback('Data fetched successfully');
}, 2000);

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Fetching data from server...
// Data fetched successfully


// Example 2 - Callback function as an argument

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('John', callMe); // Hello John
// I am callback function
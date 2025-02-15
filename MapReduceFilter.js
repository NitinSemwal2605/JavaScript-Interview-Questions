// JavaScript Array Methods: map(), reduce(), and filter()

// 1. Using the `map()` method
// The map() method creates a new array with the results of calling a provided function on every element in the array.

const numbers = [1, 2, 3, 4, 5];

// Example: Doubling each number in the array using map
const doubledNumbers = numbers.map(num => num * 2);

// map returns a new array, leaving the original array unchanged
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]



// 2. Using the `reduce()` method
// The reduce() method applies a function to each element of the array (from left to right) to reduce the array to a single value.

const numbersForReduce = [1, 2, 3, 4, 5];

// Example: Summing all the numbers in the array using reduce
const sum = numbersForReduce.reduce((acc, num) => acc + num, 0);

// reduce returns a single value (sum in this case)
console.log(sum);  // Output: 15


// 3. Using the `filter()` method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const numbersForFilter = [1, 2, 3, 4, 5];

// Example: Filtering out even numbers from the array using filter
const evenNumbers = numbersForFilter.filter(num => num % 2 === 0);

// filter returns a new array containing only the elements that pass the test
console.log(evenNumbers);  // Output: [2, 4]

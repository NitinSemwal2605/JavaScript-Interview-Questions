// -------------- Example of this in Ojbects ----------------

const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person.greet(); // Output: Hello, my name is Alice


//---------------- Arrow Functions and this ----------------

const obj = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    },
};

obj.greet(); // Output: Hello, my name is undefined


// -------------- Example of this in Classes ----------------

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const Human = new Person("Nitin");
person.greet(); // Output: Hello, my name is Nitin


// -------------- Example of this in Constructor ----------------
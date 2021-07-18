// Data Types

// primitive types/ value
let pname = "Thilrash"; // String Literals
let age = 24; // Number Literals
let isApproved = false; // Boolean Literals
let firstName = undefined;
let selectedColor = null;

// JS booleans
let x = 5;
let y = 5;
let z = 6;

console.log(x == y);
console.log(x == z);

// Arrays
const cars = ["Nissan", "Toyota", "Maruthi", "Audi", "BMW"];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);

// Objects
let person = {
    person_name: "Thilrash Ameen",
    person_age:25
};

console.log(person);

// dot notation
person.person_name = "Jack Reacher";
console.log(person.person_name);

// bracket notation
person['person_name'] = "Jhon Doe";
console.log(person.person_name);

// typeof
console.log(typeof(cars));
console.log(typeof(pname))
console.log(typeof(age));
console.log(typeof(isApproved));
console.log(typeof(firstName));
console.log(typeof(selectedColor));

// empty values
let _car = "";

console.log(_car);
// Variables
let name = 'Thilrash';
console.log(name);

var $name = "Thilrash Ameen";
console.log($name);

const _name = 31.4014;
console.log(_name);

// let & const not allowed to hoisting but can use in var

// primitive types/ value
let pname = "Thilrash"; // String Literals
let age = 24; // Number Literals
let isApproved = false; // Boolean Literals
let firstName = undefined;
let selectedColor = null;

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
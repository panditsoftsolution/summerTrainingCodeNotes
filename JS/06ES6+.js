/*
=========================================================
        Modern JavaScript (ES6+) Complete Notes
        Author: Abhi
=========================================================

Topics Covered:
1. let & const
2. Arrow Functions
3. Template Literals
4. Destructuring
5. Spread Operator
6. Rest Operator
7. Enhanced Object Literals
8. Optional Chaining
9. Nullish Coalescing Operator
10. ES Modules

=========================================================
*/


// =========================================================
// 1. let & const
// =========================================================

// var is function scoped
// let and const are block scoped

let age = 21;
age = 22; // Allowed

console.log("Age:", age);

const PI = 3.14159;
// PI = 3; // ❌ Error (const cannot be reassigned)

console.log("PI:", PI);

// Block Scope Example

{
    let x = 10;
    console.log(x); // 10
}

// console.log(x); // ❌ Error


// =========================================================
// 2. Arrow Functions
// =========================================================

// Normal Function

function add(a, b) {
    return a + b;
}

console.log(add(5, 4));

// Arrow Function 

const sum = (a, b) => {
    return a + b;
};

console.log(sum(10, 20));

// Single line arrow function

const multiply = (a, b) => a * b;

console.log(multiply(5, 6));

// One parameter

const square = num => num * num;

console.log(square(8));


// =========================================================
// 3. Template Literals
// =========================================================

// Old Way

let firstName = "Abhi";
let city = "Siwan";

console.log("My name is " + firstName + " from " + city);

// Modern Way

console.log(`My name is ${firstName} from ${city}`);

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);


// =========================================================
// 4. Destructuring
// =========================================================

// Array Destructuring

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Object Destructuring

const student = {
    name: "Abhi",
    age: 21,
    branch: "CSE"
};

const { name, age: studentAge, branch } = student;

console.log(name);
console.log(studentAge);
console.log(branch);


// =========================================================
// 5. Spread Operator (...)
// =========================================================

// Spread expands values

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = [...arr1, ...arr2];

console.log(merged);

// Copy Array

const copy = [...arr1];

console.log(copy);

// Object Spread

const user = {
    name: "Abhi",
    age: 21
};

const updatedUser = {
    ...user,
    city: "Siwan"
};

console.log(updatedUser);


// =========================================================
// 6. Rest Operator (...)
// =========================================================

// Rest collects multiple values

function total(...numbers){

    console.log(numbers);

    let sum = 0;

    for(let num of numbers){
        sum += num;
    }

    return sum;
}

console.log(total(10,20,30,40));

// Rest in Destructuring

const nums = [10,20,30,40,50];

const [one, two, ...remaining] = nums;

console.log(one);
console.log(two);
console.log(remaining);


// =========================================================
// 7. Enhanced Object Literals
// =========================================================

// Before ES6

const username = "Abhi";
const profession = "Developer";

const person1 = {
    username: username,
    profession: profession
};

console.log(person1);

// ES6 Enhanced Object

const person2 = {
    username,
    profession,

    greet(){
        console.log("Hello");
    }
};

console.log(person2);

person2.greet();


// =========================================================
// 8. Optional Chaining (?.)
// =========================================================

const employee = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

console.log(employee.address.city);

// Optional Chaining

console.log(employee.office?.location);

// Returns undefined instead of error


// =========================================================
// 9. Nullish Coalescing Operator (??)
// =========================================================

// Returns right side only if left side is
// null or undefined

let value1 = null;

console.log(value1 ?? "Default Value");

let value2 = undefined;

console.log(value2 ?? "Default");

let value3 = 0;

console.log(value3 ?? 100);

// Output -> 0
// Because 0 is NOT null or undefined

let value4 = "";

console.log(value4 ?? "Hello");

// Output -> ""


// =========================================================
// Difference between || and ??
// =========================================================

console.log(0 || 100);
// 100

console.log(0 ?? 100);
// 0

console.log("" || "Guest");
// Guest

console.log("" ?? "Guest");
// ""


// =========================================================
// 10. ES Modules
// =========================================================

/*

JavaScript Modules allow code splitting.

----------- math.js -----------

export const PI = 3.14;

export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

----------- app.js -----------

import {PI} from "./math.js";

console.log(PI);

console.log(add(10,20));

console.log(sub(50,10));

*/

// Default Export

/*

----------- person.js -----------

export default function greet(){
    console.log("Hello");
}

----------- app.js -----------

import greet from "./person.js";

greet();

*/


// =========================================================
// Mini Example
// =========================================================

const studentInfo = {
    name: "Abhi",
    age: 21,
    skills: ["HTML","CSS","JavaScript"]
};

// Destructuring

const {skills} = studentInfo;

// Spread

const allSkills = [...skills,"React","Node"];

// Arrow Function

const printSkills = (list) => {

    list.forEach(skill => console.log(skill));

};

printSkills(allSkills);


// =========================================================
// End of File
// =========================================================
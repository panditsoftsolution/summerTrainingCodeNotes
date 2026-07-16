/*
=========================================================
        Phase 7 - Scope & Execution
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
5. Hoisting
6. Temporal Dead Zone (TDZ)
7. Execution Context
8. Call Stack

=========================================================
*/


// =========================================================
// 1. GLOBAL SCOPE
// =========================================================

/*
Variables declared outside every function or block
belong to the global scope.

They can be accessed from anywhere.
*/

let username = "Abhi";

function greet() {
    console.log(username);
}

greet();
console.log(username);



// =========================================================
// 2. FUNCTION SCOPE
// =========================================================

/*
Variables declared inside a function
cannot be accessed outside it.
*/

function demoFunctionScope() {

    let message = "Hello World";

    console.log(message);

}

demoFunctionScope();

// console.log(message); // ❌ Error



// =========================================================
// 3. BLOCK SCOPE
// =========================================================

/*
let and const are block scoped.

A block means anything inside { }.
*/

if (true) {

    let age = 22;
    const city = "Siwan";

    console.log(age);
    console.log(city);

}

// console.log(age); // ❌ Error
// console.log(city); // ❌ Error



/*
var ignores block scope.
*/

if (true) {

    var country = "India";

}

console.log(country);



// =========================================================
// 4. LEXICAL SCOPE
// =========================================================

/*
A function can access variables
from its parent scope.
*/

let language = "JavaScript";

function outer() {

    let framework = "React";

    function inner() {

        console.log(language);
        console.log(framework);

    }

    inner();

}

outer();



// Example 2

function parent() {

    let money = 1000;

    function child() {

        console.log("Money =", money);

    }

    child();

}

parent();



// =========================================================
// 5. HOISTING
// =========================================================

/*
Hoisting(to lift - uthana) means JavaScript moves
declarations to the top before execution.

Only declarations are hoisted,
not initializations.
*/


// -------------------------
// var Hoisting
// -------------------------

console.log(num);

var num = 50;

/*

Internally JS sees it as

var num;

console.log(num);

num = 50;

Output:
undefined

*/


// -------------------------
// let Hoisting
// -------------------------

// console.log(score);

let score = 90;

/*
ReferenceError

Because let exists inside
Temporal Dead Zone.
*/


// -------------------------
// Function Hoisting
// -------------------------

sayHello();

function sayHello() {

    console.log("Hello");

}

/*
Function declarations
are completely hoisted.
*/


// Function Expression

// greetUser();

const greetUser = function(){

    console.log("Hi");

};

/*
Cannot access before initialization.
*/



// =========================================================
// 6. TEMPORAL DEAD ZONE (TDZ)
// =========================================================

/*
TDZ is the time between

Variable creation
and

Variable initialization.

During TDZ,
variable cannot be used.
*/

// console.log(student);

let student = "Rahul";

console.log(student);



/*

Memory Phase

student -> uninitialized

Execution Phase

student = Rahul

*/



// =========================================================
// 7. EXECUTION CONTEXT
// =========================================================

/*

Execution Context is the environment
where JavaScript executes code.

Every execution context has

1. Memory Creation Phase
2. Code Execution Phase

*/


let x = 10;

function add(a,b){

    let result = a+b;

    return result;

}

let answer = add(20,30);

console.log(answer);


/*

Execution Context

Global Context

Memory

x -> undefined

add -> function

answer -> undefined


Execution

x = 10

add()

answer = 50

*/



// =========================================================
// Function Execution Context
// =========================================================

function multiply(a,b){

    let total = a*b;

    return total;

}

console.log(multiply(5,4));

/*

New Function Context

Memory

a
b
total

Execution

a = 5

b = 4

total = 20

return 20

Context removed

*/



// =========================================================
// 8. CALL STACK
// =========================================================

/*

Call Stack follows

LIFO

Last In
First Out

*/


function one(){

    console.log("One");

    two();

}

function two(){

    console.log("Two");

    three();

}

function three(){

    console.log("Three");

}

one();


/*

Call Stack

Start

Global()

↓

one()

↓

two()

↓

three()

↓

three finishes

↓

two finishes

↓

one finishes

↓

Global finishes

*/


// =========================================================
// Call Stack Example 2
// =========================================================

function login(){

    dashboard();
    console.log("Login");


}

function dashboard(){

    profile();
    console.log("Dashboard");


}

function profile(){

    console.log("Profile");

}

login();



/*

Stack

Global

↓

login()

↓

dashboard()

↓

profile()

↓

profile removed

↓

dashboard removed

↓

login removed

*/


// =========================================================
// Interview Example
// =========================================================

let name = "Abhi";

function outerFunction(){

    let course = "JavaScript";

    function innerFunction(){

        console.log(name);
        console.log(course);
    }

    innerFunction();

}

outerFunction();



// =========================================================
// Interview Example - Hoisting
// =========================================================

console.log(a);

var a = 100;

// Output
// undefined


// console.log(b);

let b = 200;

// ReferenceError



// =========================================================
// Interview Example - Block Scope
// =========================================================

{

    let x = 10;
    const y = 20;
    var z = 30;

}

console.log(z);

// console.log(x);
// console.log(y);



// =========================================================
// Interview Example - Lexical Scope
// =========================================================

function A(){

    let value = 100;

    function B(){

        function C(){

            console.log(value);

        }

        C();

    }

    B();

}

A();



// =========================================================
// Summary
// =========================================================

/*

Global Scope
✔ Accessible everywhere

Function Scope
✔ Accessible only inside function

Block Scope
✔ Accessible only inside {}

Lexical Scope
✔ Child functions access parent variables

Hoisting
✔ Declarations move to top

TDZ
✔ let & const cannot be accessed before initialization

Execution Context
✔ Memory Phase
✔ Execution Phase

Call Stack
✔ LIFO
✔ Last In First Out

*/


// =========================================================
// End of File
// =========================================================
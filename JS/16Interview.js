/*
=========================================================
      Phase 17-21 - JavaScript Interview Notes
      (Simple Version)
      Author: Abhi
=========================================================

Topics

Phase 17
---------
1. Event Loop
2. Web APIs
3. Microtasks
4. Macrotasks
5. Memory Management
6. Garbage Collection

Phase 18
---------
7. Debouncing
8. Throttling

Phase 19
---------
9. ES Modules
10. Named Export
11. Default Export
12. Dynamic Import

Phase 20
---------
13. First-Class Functions
14. Higher Order Functions
15. Pure Functions
16. Immutability
17. Function Composition

Phase 21
---------
18. Interview Revision

=========================================================
*/



// =========================================================
// 1. EVENT LOOP
// =========================================================

/*

JavaScript is Single Threaded.

Execution Order

Call Stack

↓

Microtask Queue

↓

Macrotask Queue

*/

console.log("Start");

setTimeout(() => {

    console.log("Timeout");

},0);

Promise.resolve()

.then(()=>{

    console.log("Promise");

});

console.log("End");

/*

Output

Start

End

Promise

Timeout

*/



// =========================================================
// 2. WEB APIs
// =========================================================

/*

Provided by Browser

✔ setTimeout()

✔ setInterval()

✔ fetch()

✔ DOM

✔ Geolocation

✔ Local Storage

JavaScript itself
does not provide these.

*/



// =========================================================
// 3. MICROTASK
// =========================================================

/*

Higher Priority

Examples

Promise.then()

catch()

finally()

queueMicrotask()

*/



// =========================================================
// 4. MACROTASK
// =========================================================

/*

Lower Priority

Examples

setTimeout()

setInterval()

Events

*/



// =========================================================
// 5. MEMORY MANAGEMENT
// =========================================================

let user={

    name:"Abhi"

};

user=null;

/*

Object becomes unreachable.

Memory will be cleaned
by Garbage Collector.

*/



// =========================================================
// 6. GARBAGE COLLECTION
// =========================================================

/*

Automatically removes

unused objects

from memory.

No manual memory management
like C/C++.

*/



// =========================================================
// 7. DEBOUNCING
// =========================================================

/*

Runs function only

after user stops
performing an action.

Used In

✔ Search

✔ Resize

✔ Auto Save

*/

function debounce(fn,delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer=setTimeout(()=>{

            fn();

        },delay);

    };

}



// =========================================================
// 8. THROTTLING
// =========================================================

/*

Runs function

once every fixed interval.

Used In

✔ Scroll

✔ Resize

✔ Mouse Move

*/

function throttle(fn,delay){

    let allow=true;

    return function(){

        if(!allow) return;

        fn();

        allow=false;

        setTimeout(()=>{

            allow=true;

        },delay);

    };

}



// =========================================================
// 9. ES MODULES
// =========================================================

/*

math.js

export const PI=3.14;

export function add(){}

--------------------

app.js

import {PI,add}

from "./math.js";

*/



// =========================================================
// 10. DEFAULT EXPORT
// =========================================================

/*

greet.js

export default function greet(){}

-------------------------

app.js

import greet from "./greet.js";

*/



// =========================================================
// 11. DYNAMIC IMPORT
// =========================================================

/*

Loads module

only when needed.

*/

async function loadModule(){

    const module=await import("./math.js");

    console.log(module);

}



// =========================================================
// 12. FIRST CLASS FUNCTION
// =========================================================

/*

Functions can

✔ Store

✔ Pass

✔ Return

*/

const greet=function(){

    console.log("Hello");

};



// =========================================================
// 13. HIGHER ORDER FUNCTION
// =========================================================

/*

Accepts

or

Returns

another function.

*/

function welcome(callback){

    callback();

}

welcome(greet);



// Examples

const numbers=[1,2,3];

const squares=numbers.map(num=>num*num);

console.log(squares);



// =========================================================
// 14. PURE FUNCTION
// =========================================================

/*

Same Input

↓

Same Output

*/

function add(a,b){

    return a+b;

}

console.log(add(5,3));



// =========================================================
// IMPURE FUNCTION
// =========================================================

let total=0;

function increase(){

    total++;

}

increase();



// =========================================================
// 15. IMMUTABILITY
// =========================================================

const student={

    name:"Abhi"

};

const updatedStudent={

    ...student,

    age:22

};

console.log(updatedStudent);



// =========================================================
// 16. FUNCTION COMPOSITION
// =========================================================

const double=num=>num*2;

const square=num=>num*num;

const result=square(double(5));

console.log(result);



// =========================================================
// 17. INTERVIEW REVISION
// =========================================================



// ---------------------------------------------------------
// var vs let vs const
// ---------------------------------------------------------

/*

var

✔ Function Scope

✔ Redeclare

✔ Reassign

---------------------

let

✔ Block Scope

✔ Reassign

---------------------

const

✔ Block Scope

❌ No Reassign

*/



// ---------------------------------------------------------
// == vs ===
// ---------------------------------------------------------

console.log(5=="5");

console.log(5==="5");

/*

==

Loose Equality

===

Strict Equality

*/



// ---------------------------------------------------------
// Hoisting
// ---------------------------------------------------------

console.log(a);

var a=10;

// undefined

// console.log(b);

// let b=20;

// ReferenceError



// ---------------------------------------------------------
// Scope
// ---------------------------------------------------------

let globalVar="Global";

function demo(){

    let localVar="Local";

    console.log(globalVar);

    console.log(localVar);

}

demo();



// ---------------------------------------------------------
// Closure
// ---------------------------------------------------------

function outer(){

    let count=0;

    return function(){

        count++;

        console.log(count);

    };

}

const counter=outer();

counter();

counter();



// ---------------------------------------------------------
// this
// ---------------------------------------------------------

const person={

    name:"Abhi",

    greet(){

        console.log(this.name);

    }

};

person.greet();



// ---------------------------------------------------------
// call()
// ---------------------------------------------------------

function intro(city){

    console.log(this.name,city);

}

intro.call(person,"Delhi");



// ---------------------------------------------------------
// apply()
// ---------------------------------------------------------

intro.apply(person,["Mumbai"]);



// ---------------------------------------------------------
// bind()
// ---------------------------------------------------------

const bound=intro.bind(person);

bound("Patna");



// ---------------------------------------------------------
// Prototype
// ---------------------------------------------------------

function Car(brand){

    this.brand=brand;

}

Car.prototype.start=function(){

    console.log("Started");

};

const car=new Car("BMW");

car.start();



// ---------------------------------------------------------
// Promise vs async/await
// ---------------------------------------------------------

function getMessagePromise(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve("Interview answer loaded");

        },1000);

    });

}



getMessagePromise()

.then(message=>console.log("Promise:",message));



async function showMessageAsync(){

    const message=await getMessagePromise();

    console.log("Async/Await:",message);

}



showMessageAsync();



// ---------------------------------------------------------
// Debounce vs Throttle
// ---------------------------------------------------------

/*

Debounce

Wait

↓

Execute

-----------------------

Throttle

Execute

↓

Wait

↓

Execute

*/



// ---------------------------------------------------------
// Shallow Copy
// ---------------------------------------------------------

const obj1={

    name:"Abhi"

};

const copy1={

    ...obj1

};



// ---------------------------------------------------------
// Deep Copy
// ---------------------------------------------------------

const obj2={

    name:"Abhi",

    skills:["HTML","CSS"]

};

const copy2=structuredClone(obj2);

console.log(copy2);



// =========================================================
// QUICK REVISION
// =========================================================

/*

Event Loop
-----------
Call Stack
↓

Microtask
↓

Macrotask

Web APIs
---------
setTimeout
fetch
DOM

Debounce
---------
Wait then Execute

Throttle
---------
Execute Every Interval

First Class Function
--------------------
Functions are Values

Higher Order Function
---------------------
Accept/Return Function

Pure Function
-------------
No Side Effects

Immutability
------------
Don't Modify Original Object

Composition
-----------
Combine Functions

*/


// =========================================================
// END OF FILE
// =========================================================

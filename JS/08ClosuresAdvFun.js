/*
=========================================================
        Phase 8 - Advanced Functions
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Closures
2. Currying
3. call()
4. apply()
5. bind()
6. Function Borrowing

=========================================================
*/


// =========================================================
// 1. CLOSURES
// =========================================================

/*
Definition:

A Closure is created when an inner function
remembers and can access variables from
its outer function even after the outer
function has finished execution.

In simple words:

Inner Function + Outer Function's Variables
= Closure
*/


function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;

}

const counter = outer();

counter(); //1
counter(); //2
counter(); //3


/*
Explanation

outer() finishes execution.

Normally count should disappear.

But inner() still remembers count.

That's Closure.
*/



// =========================================================
// Another Closure Example
// =========================================================

function greeting(name){

    return function(message){

        console.log(`${message}, ${name}`);

    };

}

const greetAbhi = greeting("Abhi");

greetAbhi("Hello");
greetAbhi("Welcome");



// =========================================================
// Practical Closure Example
// =========================================================

function createBankAccount(initialBalance){

    let balance = initialBalance;

    return {

        deposit(amount){
            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw(amount){
            balance -= amount;
            console.log("Balance:", balance);
        }

    };

}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

// balance cannot be accessed directly



// =========================================================
// 2. CURRYING
// =========================================================

/*
Currying means

Converting

f(a,b,c)

into

f(a)(b)(c)

Each function receives one argument.
*/


function add(a){

    return function(b){

        return a+b;

    };

}

console.log(add(5)(10));



// Example 2

function multiply(a){

    return function(b){

        return function(c){

            return a*b*c;

        };

    };

}

console.log(multiply(2)(3)(4));



// Real Example

function discount(discountPercentage){

    return function(price){

        return price-(price*discountPercentage/100);

    };

}

const studentDiscount = discount(20);

console.log(`After discount: ${studentDiscount(1000)}`);



// =========================================================
// 3. call()
// =========================================================

/*
Syntax

function.call(object,arg1,arg2,...)

call()

1. Invokes immediately
2. Passes arguments individually
*/


const person1 = {

    name:"Abhi",

    intro:function(city,country){

        console.log(
            `I'm ${this.name} from ${city}, ${country}`
        );

    }

};

const person2 = {

    name:"Rahul"

};

person1.intro.call(person2,"Delhi","India");



// Another Example

function show(age){

    console.log(this.name,age);

}

const user={

    name:"Ankit"

};

show.call(user,22);



// =========================================================
// 4. apply()
// =========================================================

/*
Syntax

function.apply(object,[arguments])

Difference

Arguments are passed as an array.
*/


const employee={

    name:"Rohan"

};

function details(city,country){

    console.log(
        `${this.name} lives in ${city}, ${country}`
    );

}

details.apply(employee,["Mumbai","India"]);



// =========================================================
// call() vs apply()
// =========================================================

function sum(a,b,c){

    console.log(a+b+c);

}

sum.call(null,10,20,30);

sum.apply(null,[10,20,30]);



// =========================================================
// 5. bind()
// =========================================================

/*
bind()

Creates a new function.

Does NOT execute immediately.
*/


const student={

    name:"Abhi"

};

function welcome(){

    console.log(`Welcome ${this.name}`);

}

const newFunction = welcome.bind(student);

newFunction();



// Example

function greet(city){

    console.log(`${this.name} from ${city}`);

}

const user1={

    name:"Ankit"

};

const greetUser = greet.bind(user1);

greetUser("Patna");



// =========================================================
// Difference
// =========================================================

/*

call()

Immediately executes

apply()

Immediately executes

bind()

Returns a new function

*/



// =========================================================
// 6. FUNCTION BORROWING
// =========================================================

/*
Function Borrowing

One object borrows another object's method
using call(), apply(), or bind().
*/


const studentA={

    name:"Abhi",

    print(){

        console.log(this.name);

    }

};

const studentB={

    name:"Rahul"

};

studentA.print.call(studentB);



// Example 2

const employee1={

    firstName:"Amit",

    lastName:"Sharma",

    fullName:function(){

        console.log(
            this.firstName+" "+this.lastName
        );

    }

};

const employee2={

    firstName:"Rohit",

    lastName:"Verma"

};

employee1.fullName.call(employee2);



// =========================================================
// Interview Question
// =========================================================

const person={

    name:"Abhi",

    greet(){

        console.log(this.name);

    }

};

const anotherPerson={

    name:"Rahul"

};

person.greet.call(anotherPerson);



// =========================================================
// Interview Question
// =========================================================

function multiplyNumbers(a){

    return function(b){

        return a*b;

    };

}

const double = multiplyNumbers(2);

console.log(double(10));



// =========================================================
// Interview Question
// =========================================================

function counterFunction(){

    let count=0;

    return function(){

        count++;

        console.log(count);

    };

}

const c1=counterFunction();

c1();
c1();
c1();



// =========================================================
// Summary
// =========================================================

/*

Closures
✔ Inner function remembers outer variables

Currying
✔ Converts multiple parameters into
single parameter functions

call()
✔ Executes immediately
✔ Arguments individually

apply()
✔ Executes immediately
✔ Arguments inside array

bind()
✔ Returns new function
✔ Executes later

Function Borrowing
✔ Borrow methods using
call(), apply(), bind()

*/


// =========================================================
// Quick Revision Table
// =========================================================

/*

Closure
-------
Remembers outer variables

Currying
--------
f(a,b) → f(a)(b)

call()
------
Immediate execution
Arguments separately

apply()
-------
Immediate execution
Arguments as array

bind()
------
Returns new function

Function Borrowing
------------------
Using another object's method

*/


// =========================================================
// End of File
// =========================================================
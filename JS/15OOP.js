/*
=========================================================
        Phase 16 - Object Oriented Programming (OOP)
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Constructor Functions
2. Prototype
3. Prototype Chain
4. ES6 Classes
5. Encapsulation
6. Inheritance
7. Polymorphism
8. Static Methods

=========================================================
*/



// =========================================================
// WHAT IS OOP?
// =========================================================

/*

OOP = Object Oriented Programming

OOP is a programming paradigm where
objects contain

✔ Properties (Data)

✔ Methods (Functions)

Example

Car

Properties
-----------
Color
Brand
Speed

Methods
--------
Start()
Stop()
Accelerate()

*/


// =========================================================
// 1. CONSTRUCTOR FUNCTIONS
// =========================================================

/*
Constructor functions create
multiple objects using the new keyword.
*/

function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;

    this.introduce = function(){

        console.log(
            `Hi, I'm ${this.name}`
        );

    };

}

const student1 = new Student(
    "Abhi",
    22,
    "JavaScript"
);

const student2 = new Student(
    "Rahul",
    21,
    "React"
);

console.log(student1);

student1.introduce();

student2.introduce();



// =========================================================
// Constructor Example
// =========================================================

function Car(brand, model){

    this.brand = brand;
    this.model = model;

}

const car1 = new Car(
    "BMW",
    "X5"
);

console.log(car1);



// =========================================================
// 2. PROTOTYPE
// =========================================================

/*
Instead of creating methods
inside every object,

place them on the prototype.

Memory Efficient
*/

function Employee(name){

    this.name = name;

}

Employee.prototype.greet = function(){

    console.log(
        `Welcome ${this.name}`
    );

};

const emp1 = new Employee("Amit");

emp1.greet();



// =========================================================
// Prototype Properties
// =========================================================

console.log(Employee.prototype);

console.log(emp1.__proto__);



// =========================================================
// Why Prototype?
// =========================================================

/*

Without Prototype

Every object gets
its own copy of methods.

With Prototype

All objects share
one common method.

Less Memory

*/



// =========================================================
// 3. PROTOTYPE CHAIN
// =========================================================

/*
Every object looks for
a property in this order

Object

↓

Prototype

↓

Prototype's Prototype

↓

Object.prototype

↓

null

*/


const user = {

    name:"Abhi"

};

console.log(user.toString());



console.log(user.__proto__);

console.log(Object.prototype);



// =========================================================
// Example
// =========================================================

const numbers = [1,2,3];

console.log(numbers.push);

console.log(numbers.toString());



/*

numbers

↓

Array.prototype

↓

Object.prototype

↓

null

*/



// =========================================================
// 4. ES6 CLASSES
// =========================================================

/*
Class is syntactic sugar
over constructor functions.
*/

class Person{

    constructor(name,age){

        this.name = name;
        this.age = age;

    }

    greet(){

        console.log(
            `Hello ${this.name}`
        );

    }

}

const person1 = new Person(
    "Abhi",
    22
);

person1.greet();



// =========================================================
// Another Class
// =========================================================

class Laptop{

    constructor(brand,price){

        this.brand = brand;
        this.price = price;

    }

    details(){

        console.log(

            `${this.brand} ₹${this.price}`

        );

    }

}

const laptop = new Laptop(
    "Dell",
    65000
);

laptop.details();



// =========================================================
// 5. ENCAPSULATION
// =========================================================

/*
Encapsulation means

Hiding internal data
and exposing only
necessary methods.
*/

class BankAccount{

    #balance = 0;

    deposit(amount){

        this.#balance += amount;

    }

    withdraw(amount){

        this.#balance -= amount;

    }

    getBalance(){

        return this.#balance;

    }

}

const account = new BankAccount();

account.deposit(1000);

account.withdraw(200);

console.log(account.getBalance());

// console.log(account.#balance); ❌ Error



// =========================================================
// 6. INHERITANCE
// =========================================================

/*
Inheritance allows
one class to inherit
another class.
*/

class Animal{

    constructor(name){

        this.name = name;

    }

    speak(){

        console.log(

            `${this.name} makes sound`

        );

    }

}

class Dog extends Animal{

    bark(){

        console.log(

            `${this.name} barks`

        );

    }

}

const dog = new Dog("Tommy");

dog.speak();

dog.bark();



// =========================================================
// Using super()
// =========================================================

class Vehicle{

    constructor(brand){

        this.brand = brand;

    }

}

class Bike extends Vehicle{

    constructor(brand,model){

        super(brand);

        this.model = model;

    }

}

const bike = new Bike(
    "Yamaha",
    "R15"
);

console.log(bike);



// =========================================================
// 7. POLYMORPHISM
// =========================================================

/*
Same method

Different behavior.
*/

class Shape{

    draw(){

        console.log("Drawing Shape");

    }

}

class Circle extends Shape{

    draw(){

        console.log("Drawing Circle");

    }

}

class Rectangle extends Shape{

    draw(){

        console.log("Drawing Rectangle");

    }

}

const circle = new Circle();

const rectangle = new Rectangle();

circle.draw();

rectangle.draw();



// =========================================================
// Another Example
// =========================================================

class Bird{

    sound(){

        console.log("Bird Sound");

    }

}

class Sparrow extends Bird{

    sound(){

        console.log("Chirp Chirp");

    }

}

class Crow extends Bird{

    sound(){

        console.log("Caw Caw");

    }

}

new Sparrow().sound();

new Crow().sound();



// =========================================================
// 8. STATIC METHODS
// =========================================================

/*
Static methods belong
to the class,

NOT objects.
*/

class MathUtility{

    static square(num){

        return num*num;

    }

}

console.log(

    MathUtility.square(5)

);

// MathUtility instance not required



// =========================================================
// Static Example
// =========================================================

class User{

    static company(){

        console.log(

            "Pandit Soft Solution"

        );

    }

}

User.company();



// =========================================================
// instanceof
// =========================================================

console.log(

    person1 instanceof Person

);

console.log(

    dog instanceof Animal

);

console.log(

    dog instanceof Dog

);



// =========================================================
// Interview Questions
// =========================================================

// Constructor Function

function Mobile(brand){

    this.brand = brand;

}

const phone = new Mobile("Samsung");

console.log(phone);



// Prototype Method

Mobile.prototype.show = function(){

    console.log(this.brand);

};

phone.show();



// Class

class StudentClass{

    constructor(name){

        this.name = name;

    }

}

const s = new StudentClass("Abhi");

console.log(s);



// =========================================================
// OOP Pillars
// =========================================================

/*

1. Encapsulation

Hide Data

-------------------------

2. Inheritance

Reuse Code

-------------------------

3. Polymorphism

One Method
Many Behaviors

-------------------------

4. Abstraction

Hide Implementation

(JavaScript achieves
abstraction using
classes/interfaces patterns.)

*/



// =========================================================
// Summary
// =========================================================

/*

Constructor Function

✔ Creates Objects

--------------------------

Prototype

✔ Shared Methods

--------------------------

Prototype Chain

✔ Object Lookup

--------------------------

Class

✔ Modern OOP Syntax

--------------------------

Encapsulation

✔ Private Data

--------------------------

Inheritance

✔ Reuse Code

--------------------------

Polymorphism

✔ Same Method
Different Behavior

--------------------------

Static Method

✔ Belongs to Class

*/


// =========================================================
// END OF FILE
// =========================================================
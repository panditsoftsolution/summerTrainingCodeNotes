// ==========================================================
// PHASE 2 - FUNCTIONS
// Topics:
// ✔ Function Declaration
// ✔ Function Expression
// ✔ Arrow Function
// ✔ Parameters & Arguments
// ✔ Return Statement
// ✔ Default Parameters
// ✔ Rest Parameters
// ✔ Spread Operator
// ✔ Callback Function
// ✔ Higher Order Function
// ✔ IIFE
// ✔ Pure vs Impure Function
// ✔ Recursion
// ==========================================================

console.log("========== FUNCTION DECLARATION ==========");

function greet() {
    console.log("Hello World");
}

greet();

// ==========================================================

console.log("\n========== FUNCTION EXPRESSION ==========");

const sayHello = function () {
    console.log("Hello from Function Expression");
};

sayHello();

// ==========================================================

console.log("\n========== ARROW FUNCTION ==========");

const welcome = () => {
    console.log("Welcome to JavaScript");
};

welcome();

// ==========================================================

console.log("\n========== PARAMETERS & ARGUMENTS ==========");

function add(a, b) {
    console.log("Sum =", a + b);
}

add(10, 20);
add(100, 200);

// ==========================================================

console.log("\n========== RETURN STATEMENT ==========");

function square(num) {
    return num * num;
}

let result = square(6);

console.log(result);

// ==========================================================

console.log("\n========== DEFAULT PARAMETERS ==========");

function introduce(name = "Guest", city = "Unknown") {
    console.log(`Name : ${name}`);
    console.log(`City : ${city}`);
}

introduce();
introduce("Abhi", "Siwan");

// ==========================================================

console.log("\n========== REST PARAMETERS ==========");

function total(...numbers) {

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(total(10, 20));
console.log(total(10, 20, 30));
console.log(total(10, 20, 30, 40, 50));

// ==========================================================

console.log("\n========== SPREAD OPERATOR ==========");

let arr1 = [1, 2, 3];

let copy = [...arr1];

console.log(copy);

let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];

console.log(merged);

// ==========================================================

console.log("\n========== CALLBACK FUNCTION ==========");

function greetUser(name) {
    console.log("Welcome " + name);
}

function processUser(callback) {
    callback("Abhi");
}

processUser(greetUser);

// ==========================================================

console.log("\n========== HIGHER ORDER FUNCTION ==========");

function calculator(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log(calculator(20, 10, multiply));
console.log(calculator(20, 10, divide));

// ==========================================================

console.log("\n========== IIFE ==========");

(function () {
    console.log("This function runs immediately.");
})();

// ==========================================================

console.log("\n========== PURE FUNCTION ==========");

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(5, 10));

// Same input -> Same output

// ==========================================================

console.log("\n========== IMPURE FUNCTION ==========");

let totalMarks = 0;

function addMarks(mark) {
    totalMarks += mark;
}

addMarks(10);
console.log(totalMarks);

addMarks(20);
console.log(totalMarks);

// Output changes because external variable changes

// ==========================================================

console.log("\n========== RECURSION ==========");

function countdown(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    countdown(n - 1);

}

countdown(5);

// ==========================================================

console.log("\n========== MINI PROJECT 1 ==========");

// Calculator

function calculatorApp(a, b, operator) {

    switch (operator) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;

        default:
            return "Invalid Operator";

    }

}

console.log(calculatorApp(20, 10, "+"));
console.log(calculatorApp(20, 10, "-"));
console.log(calculatorApp(20, 10, "*"));
console.log(calculatorApp(20, 10, "/"));

// ==========================================================

console.log("\n========== MINI PROJECT 2 ==========");

// Factorial using Recursion

function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);

}

console.log(factorial(5));

// ==========================================================

console.log("\n========== MINI PROJECT 3 ==========");

// Find Largest Number

function largest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    if (b >= a && b >= c) {
        return b;
    }

    return c;

}

console.log(largest(20, 80, 50));

// ==========================================================

console.log("\n========== MINI PROJECT 4 ==========");

// Even Odd

const evenOdd = (num) => {

    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";

};

console.log(evenOdd(11));
console.log(evenOdd(20));

// ==========================================================

console.log("\n========== MINI PROJECT 5 ==========");

// Sum using Rest Parameter

function sumAll(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;

}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll(100, 200, 300, 400, 500));

// ==========================================================

console.log("\n========== PRACTICE QUESTIONS ==========");

console.log("1. Write a function to check Prime Number.");
console.log("2. Write a function to reverse a string.");
console.log("3. Write a recursive Fibonacci function.");
console.log("4. Find maximum number using a function.");
console.log("5. Create your own calculator.");
console.log("6. Use callback to print Welcome Student.");
console.log("7. Merge two arrays using Spread.");
console.log("8. Find average using Rest Parameter.");
console.log("9. Find factorial using recursion.");
console.log("10. Create an arrow function to calculate square.");

// ==========================================================

console.log("\n========== END OF PHASE 2 ==========");
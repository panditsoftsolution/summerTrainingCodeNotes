// // ======================================================
// // PHASE 1 — CORE JAVASCRIPT
// // Variables | Data Types | Type Conversion | Operators
// // Template Literals | User Input | Conditionals
// // Loops | Break & Continue
// // ======================================================

// console.log("========== VARIABLES ==========");

// var
// var name = "Abhi";
// console.log(name);

// var name = "Rahul"; // Redeclare Allowed
// console.log(name);

// // let
// let age = 22;
// console.log(age);

// age = 23; // Update Allowed
// console.log(age);

// // const
// const PI = 3.14;
// console.log(PI);

// PI = 5; // Error

// // ======================================================

// console.log("\n========== DATA TYPES ==========");

// let str = "JavaScript";
// let num = 100;
// let decimal = 99.99;
// let isStudent = true;
// let emptyValue = null;
// let notAssigned;
// let person = {
//     name: "Abhi",
//     age: 22
// };
// let colors = ["Red", "Green", "Blue"];

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof decimal);
// console.log(typeof isStudent);
// console.log(typeof emptyValue); // object (JavaScript Bug)
// console.log(typeof notAssigned);
// console.log(typeof person);
// console.log(typeof colors);

// ======================================================

// console.log("\n========== TYPE CONVERSION ==========");

// // Explicit Conversion

// let value = "123";

// console.log(Number(value));
// console.log(String(500));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(""));

// // Type Coercion

// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 5);
// console.log(true + 1);
// console.log(false + 10);

// // ======================================================

// console.log("\n========== OPERATORS ==========");

// let a = 20;
// let b = 6;

// // Arithmetic

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** 2);

// // Assignment

// let x = 10;
 
// x += 5;
// console.log(x);

// x -= 2;
// console.log(x);

// // Comparison

// console.log(10 == "10");
// console.log(10 === "10");
// console.log(10 != "10");
// console.log(10 !== "10");

// console.log(a > b);
// console.log(a < b);

// // Logical

// // 0 0 0
// // 0 1 0
// // 1 0 0
// // 1 1 1
// console.log(true && false); // false
// // 0 0 0
// // 0 1 1
// // 1 0 1
// // 1 1 1
// console.log(true || false); // true
// console.log(!true);

// // ======================================================

// console.log("\n========== TEMPLATE LITERALS ==========");

// let studentName = "Abhi";
// let course = "JavaScript";

// console.log("Welcome " + studentName + " to " + course);

// console.log(`Welcome ${studentName} to ${course}`);

// // ======================================================

// console.log("\n========== USER INPUT ==========");

// // Uncomment these lines in Browser

// /*
// let username = prompt("Enter your Name");
// let userAge = prompt("Enter your Age");

// alert(`Welcome ${username}`);
// console.log(username);
// console.log(userAge);
// */

// // ======================================================

// console.log("\n========== IF ELSE ==========");

let marks = 40;

if (marks >= 90) {

    console.log("Grade A");

}
else if (marks >= 75) {

    console.log("Grade B");

}
else if (marks >= 60) {

    console.log("Grade C");

}
else {

    console.log("Fail");

}

// // ======================================================

// console.log("\n========== SWITCH ==========");

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");

}

// // ======================================================

// console.log("\n========== FOR LOOP ==========");

// for (let i = 1; i <= 5; i++) {

//     console.log(i);

// }

// // ======================================================

// console.log("\n========== WHILE LOOP ==========");

// let i = 1;

// while (i <= 5) {

//     console.log(i);

//     i++;

// }

// // ======================================================

// console.log("\n========== DO WHILE LOOP ==========");

// let j = 1;

// do {

//     console.log(j);

//     j++;

// }
// while (j <= 5);

// // ======================================================

// console.log("\n======== FOR OF ==="); // for array , map , stings etc because it return value

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {

//     console.log(fruit);

// }

// // ======================================================

// console.log("\n========== FOR IN =========="); // for object etc because it return key

// let student = {

//     name: "Abhi",
//     age: 22,
//     city: "Siwan"

// };

// for (let key in student) {

//     console.log(key, ":", student[key]);

// } 

// // ======================================================

// console.log("\n========== BREAK ==========");

// for (let k = 1; k <= 10; k++) {

//     if (k == 5) {

//         break;

//     }

//     console.log(k);

// }

// // ======================================================

// console.log("\n========== CONTINUE ==========");

// for (let k = 1; k <= 10; k++) {

//     if (k == 5) {

//         continue;

//     }

//     console.log(k);

// }

// // ======================================================

// console.log("\n========== MINI PRACTICE ==========");

// // Even Odd

// let number = 17;

// if (number % 2 == 0) {

//     console.log(number + " is Even");

// }
// else {

//     console.log(number + " is Odd");

// }

// // Largest Number

// let n1 = 25;
// let n2 = 40;
// let n3 = 18;

// if (n1 > n2 && n1 > n3) {

//     console.log("Largest =", n1);

// }
// else if (n2 > n1 && n2 > n3) {

//     console.log("Largest =", n2);

// }
// else {

//     console.log("Largest =", n3);

// }

// // Table of 5

// console.log("\nTable of 5");

// for (let i = 1; i <= 10; i++) {

//     console.log(`5 x ${i} = ${5 * i}`);

// }

// console.log("\n========== END OF PHASE 1 ==========");
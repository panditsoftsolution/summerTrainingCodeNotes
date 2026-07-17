// ==========================================================
// PHASE 4 - STRINGS
// Topics:
// length
// trim()
// toUpperCase()
// toLowerCase()
// slice()
// substring()
// replace()
// replaceAll()
// split()
// includes()
// startsWith()
// endsWith()
// ==========================================================

console.log("========== STRING ==========");

let str="   Hello JavaScript World   ";

console.log(str);

// ==========================================================

console.log("\n========== LENGTH ==========");

console.log(str.length);

// ==========================================================

console.log("\n========== TRIM ==========");

console.log(str.trim());

// ==========================================================

console.log("\n========== TO UPPER CASE ==========");

console.log(str.toUpperCase());

// ==========================================================

console.log("\n========== TO LOWER CASE ==========");

console.log(str.toLowerCase());

// ==========================================================

console.log("\n========== SLICE ==========");

let language="JavaScript";

console.log(language.slice(0,4));

console.log(language.slice(4));

console.log(language.slice(-6));

// ==========================================================

console.log("\n========== SUBSTRING ==========");

console.log(language.substring(0,4));

console.log(language.substring(4));

// ==========================================================

console.log("\n========== REPLACE ==========");

let sentence="I love Java";

console.log(sentence.replace("Java","JavaScript"));

// ==========================================================

console.log("\n========== REPLACE ALL ==========");

let text="JS is good. JS is powerful. JS is fun.";

console.log(text.replaceAll("JS","JavaScript"));

// ==========================================================

console.log("\n========== SPLIT ==========");

let names="Rahul,Abhi,Ravi,Ankit";

console.log(names.split(","));

let sentence2="Learn JavaScript Today";

console.log(sentence2.split(" "));

// ==========================================================

console.log("\n========== INCLUDES ==========");

console.log(language.includes("Script"));

console.log(language.includes("Python"));

// ==========================================================

console.log("\n========== STARTS WITH ==========");

console.log(language.startsWith("Java"));

console.log(language.startsWith("Script"));

// ==========================================================

console.log("\n========== ENDS WITH ==========");

console.log(language.endsWith("Script"));

console.log(language.endsWith("Java"));

// ==========================================================

console.log("\n========== MINI PRACTICE ==========");

// Count Characters

let username="Abhimanyu";

console.log(username.length);

// Remove Spaces

let city="   Delhi   ";

console.log(city.trim());

// Convert Uppercase

console.log(username.toUpperCase());

// Convert Lowercase

console.log(username.toLowerCase());

// Extract First Name

let fullname="Abhimanyu Kumar";

console.log(fullname.slice(0,9));

// Replace

console.log(fullname.replace("Kumar","Singh"));

// Split

console.log(fullname.split(" "));

// Check Email

let email="student@gmail.com";

console.log(email.includes("@"));

console.log(email.endsWith(".com"));

// ==========================================================

console.log("\n========== END OF PHASE 4 ==========");
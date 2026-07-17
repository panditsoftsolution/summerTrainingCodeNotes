/*
=========================================================
        Phase 15 - Error Handling
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Introduction to Errors
2. try
3. catch
4. finally
5. throw
6. Built-in Error Types
7. Custom Errors
8. Best Practices

=========================================================
*/


// =========================================================
// 1. INTRODUCTION TO ERRORS
// =========================================================

/*

Errors are unexpected problems
that stop the normal execution
of JavaScript code.

Examples

✔ Variable not found

✔ Invalid Syntax

✔ Network Error

✔ API Error

✔ Wrong Input

*/


// =========================================================
// Common Error Types
// =========================================================

/*

ReferenceError

TypeError

SyntaxError

RangeError

URIError

EvalError

*/


// =========================================================
// 2. TRY
// =========================================================

/*
Code inside try
is executed normally.

If an error occurs,
execution jumps to catch.
*/

try{

    console.log("Inside Try");

}

catch(error){

    console.log(error);

}



// =========================================================
// Example
// =========================================================

try{

    console.log(userName);

}

catch(error){

    console.log("Error Occurred");

}



/*

Output

Error Occurred

*/



// =========================================================
// 3. CATCH
// =========================================================

/*
catch receives
the error object.
*/

try{

    console.log(myVariable);

}

catch(error){

    console.log(error);

    console.log(error.name);

    console.log(error.message);

}



/*

ReferenceError

myVariable is not defined

*/



// =========================================================
// 4. FINALLY
// =========================================================

/*
finally always executes.

Whether an error occurs
or not.
*/

try{

    console.log("Try Block");

}

catch(error){

    console.log(error);

}

finally{

    console.log("Finally Block");

}



/*

Output

Try Block

Finally Block

*/



// =========================================================
// Example
// =========================================================

try{

    console.log(test);

}

catch(error){

    console.log(error.message);

}

finally{

    console.log("Execution Finished");

}



// =========================================================
// 5. THROW
// =========================================================

/*
throw creates
your own error.
*/

function checkAge(age){

    if(age<18){

        throw new Error("Age must be 18 or above");

    }

    console.log("Eligible");

}

try{

    checkAge(15);

}

catch(error){

    console.log(error.message);

}



// =========================================================
// Another Example
// =========================================================

function safeDivide(a,b){

    if(b===0){

        throw new Error("Cannot Divide by Zero");

    }

    return a/b;

}

try{

    console.log(safeDivide(20,0));

}

catch(error){

    console.log(error.message);

}



// =========================================================
// 6. BUILT-IN ERROR TYPES
// =========================================================



// -------------------------
// ReferenceError
// -------------------------

try{

    console.log(student);

}

catch(error){

    console.log(error.name);

}



// -------------------------
// TypeError
// -------------------------

try{

    const num=10;

    num.toUpperCase();

}

catch(error){

    console.log(error.name);

}



// -------------------------
// SyntaxError
// -------------------------

/*

try{

JSON.parse("{name:'Abhi'}");

}

catch(error){

console.log(error.name);

}

*/



// -------------------------
// RangeError
// -------------------------

try{

    const arr=new Array(-5);

}

catch(error){

    console.log(error.name);

}



// =========================================================
// 7. CUSTOM ERRORS
// =========================================================

/*
Create your own
error conditions.
*/

function login(username){

    if(username===""){

        throw new Error("Username Required");

    }

    console.log("Login Successful");

}

try{

    login("");

}

catch(error){

    console.log(error.message);

}



// =========================================================
// Custom Error Class
// =========================================================

class ValidationError extends Error{

    constructor(message){

        super(message);

        this.name="ValidationError";

    }

}

try{

    throw new ValidationError(

        "Password Too Short"

    );

}

catch(error){

    console.log(error.name);

    console.log(error.message);

}



// =========================================================
// API Example
// =========================================================

async function loadUserProfile(){

    try{

        const response=await fetch(

            "https://jsonplaceholder.typicode.com/users/1"

        );

        if(!response.ok){

            throw new Error("Request Failed");

        }

        const profile=await response.json();

        console.log(profile.name);

    }

    catch(error){

        console.log(error.message);

    }

    finally{

        console.log("Request Completed");

    }

}

loadUserProfile();



// =========================================================
// Form Validation Example
// =========================================================

function register(name,password){

    try{

        if(name===""){

            throw new Error(

                "Name Required"

            );

        }

        if(password.length<6){

            throw new Error(

                "Password Too Short"

            );

        }

        console.log("Registration Successful");

    }

    catch(error){

        console.log(error.message);

    }

}

register("Abhi","123");



// =========================================================
// Nested try...catch
// =========================================================

try{

    try{

        throw new Error("Inner Error");

    }

    catch(error){

        console.log(error.message);

    }

}

catch(error){

    console.log(error.message);

}



// =========================================================
// Finally Example
// =========================================================

function openFile(){

    try{

        console.log("Opening File");

    }

    finally{

        console.log("Closing File");

    }

}

openFile();



// =========================================================
// Error Object Properties
// =========================================================

try{

    throw new Error("Custom Message");

}

catch(error){

    console.log(error.name);

    console.log(error.message);

    console.log(error.stack);

}



// =========================================================
// Best Practices
// =========================================================

/*

✔ Don't use try...catch
for normal logic.

✔ Throw meaningful errors.

✔ Use finally
for cleanup.

✔ Handle API errors.

✔ Validate user input.

*/



// =========================================================
// Interview Questions
// =========================================================

// Question 1

try{

    console.log(abc);

}

catch(error){

    console.log(error.name);

}



// Question 2

try{

    throw new Error("Manual Error");

}

catch(error){

    console.log(error.message);

}



// Question 3

try{

    console.log("Start");

}

finally{

    console.log("Always Executes");

}



// =========================================================
// Summary
// =========================================================

/*

try

✔ Executes risky code

------------------------

catch

✔ Handles errors

------------------------

finally

✔ Always executes

------------------------

throw

✔ Creates custom errors

------------------------

ReferenceError

✔ Variable not defined

------------------------

TypeError

✔ Invalid operation

------------------------

SyntaxError

✔ Invalid syntax

------------------------

RangeError

✔ Invalid range

------------------------

Custom Error

✔ Create your own errors

*/


// =========================================================
// END OF FILE
// =========================================================

/*
=========================================================
        Phase 11 - Asynchronous JavaScript
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Synchronous vs Asynchronous
2. Callback Functions
3. Callback Hell
4. Promises
5. Promise.all()
6. Promise.allSettled()
7. Promise.race()
8. Promise.any()

=========================================================
*/


// =========================================================
// 1. SYNCHRONOUS JAVASCRIPT
// =========================================================

/*
Synchronous means

One task executes at a time.

Next line waits until
the previous line finishes.
*/

console.log("Start");

console.log("Learning JavaScript");

console.log("End");

/*

Output

Start
Learning JavaScript
End

*/



// =========================================================
// 2. ASYNCHRONOUS JAVASCRIPT
// =========================================================

/*
Asynchronous means

JavaScript doesn't wait.

Long-running tasks execute later
while remaining code continues.
*/

console.log("Start");

setTimeout(() => {

    console.log("Executed After 2 Seconds");

},2000);

console.log("End");

/*

Output

Start

End

Executed After 2 Seconds

*/



// =========================================================
// setTimeout()
// =========================================================

setTimeout(() => {

    console.log("Hello After 3 Seconds");

},3000);



// =========================================================
// setInterval()
// =========================================================

let count = 1;

const interval = setInterval(()=>{

    console.log("Running...",count);

    count++;

    if(count>5){

        clearInterval(interval);

    }

},1000);



// =========================================================
// CALLBACK FUNCTION
// =========================================================

/*
A callback is a function
passed as an argument
to another function.
*/

function greet(name,callback){

    console.log("Hello",name);

    callback();

}

function finished(){

    console.log("Greeting Completed");

}

greet("Abhi",finished);



// =========================================================
// Anonymous Callback
// =========================================================

greet("Rahul",function(){

    console.log("Anonymous Callback");

});



// =========================================================
// CALLBACK HELL
// =========================================================

/*
Callback Hell

Callbacks inside callbacks.

Creates deeply nested code.

Difficult to read and maintain.
*/

setTimeout(()=>{

    console.log("Step 1");

    setTimeout(()=>{

        console.log("Step 2");

        setTimeout(()=>{

            console.log("Step 3");

            setTimeout(()=>{

                console.log("Step 4");

            },1000);

        },1000);

    },1000);

},1000);


/*

This is Callback Hell.

Also called

Pyramid of Doom

*/



// =========================================================
// PROMISES
// =========================================================

/*
A Promise represents
the future result
of an asynchronous operation.

States

1. Pending

2. Fulfilled

3. Rejected

*/


const promise = new Promise((resolve,reject)=>{

    let success = true;

    if(success){

        resolve("Data Loaded");

    }

    else{

        reject("Error Loading Data");

    }

});


promise
.then((result)=>{

    console.log(result);

})
.catch((error)=>{

    console.log(error);

});



// =========================================================
// Promise Example
// =========================================================

function getUser(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve({

                id:1,

                name:"Abhi"

            });

        },2000);

    });

}


getUser()
.then(user=>{

    console.log(user);

});



// =========================================================
// Promise Chaining
// =========================================================

new Promise((resolve)=>{

    resolve(10);

})

.then((num)=>{

    return num*2;

})

.then((num)=>{

    return num+5;

})

.then((result)=>{

    console.log(result);

});



// =========================================================
// Promise Reject
// =========================================================

new Promise((resolve,reject)=>{

    reject("Something Went Wrong");

})

.catch((error)=>{

    console.log(error);

});



// =========================================================
// Promise.finally()
// =========================================================

new Promise((resolve)=>{

    resolve("Done");

})

.then(result=>{

    console.log(result);

})

.finally(()=>{

    console.log("Always Executes");

});



// =========================================================
// Promise.all()
// =========================================================

/*
Runs multiple promises.

Returns when

ALL promises succeed.

If one fails

Entire promise fails.
*/

const p1 = Promise.resolve("HTML");

const p2 = Promise.resolve("CSS");

const p3 = Promise.resolve("JavaScript");

Promise.all([p1,p2,p3])

.then(result=>{

    console.log(result);

})

.catch(error=>{

    console.log(error);

});



// =========================================================
// Promise.allSettled()
// =========================================================

/*
Waits for ALL promises.

Doesn't matter whether

Resolved

or

Rejected.
*/

const promise1 = Promise.resolve("Success");

const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1,promise2])

.then(result=>{

    console.log(result);

});



// =========================================================
// Promise.race()
// =========================================================

/*
Returns

First Settled Promise

Resolved

or

Rejected
*/

const fast = new Promise(resolve=>{

    setTimeout(()=>{

        resolve("Fast");

    },1000);

});

const slow = new Promise(resolve=>{

    setTimeout(()=>{

        resolve("Slow");

    },3000);

});

Promise.race([fast,slow])

.then(result=>{

    console.log(result);

});



// =========================================================
// Promise.any()
// =========================================================

/*
Returns

First Successful Promise.

Ignores rejected promises.

Fails only if

ALL promises reject.
*/

const task1 = Promise.reject("Fail");

const task2 = Promise.resolve("Success");

const task3 = Promise.resolve("Completed");

Promise.any([task1,task2,task3])

.then(result=>{

    console.log(result);

});



// =========================================================
// Promise.any() Failure
// =========================================================

const a = Promise.reject("Error1");

const b = Promise.reject("Error2");

Promise.any([a,b])

.catch(error=>{

    console.log(error);

});



// =========================================================
// Comparison Table
// =========================================================

/*

Promise.all()

✔ All Must Succeed

❌ One Failure
Entire Failure

--------------------------

Promise.allSettled()

✔ Waits For All

✔ Success + Failure

--------------------------

Promise.race()

✔ First Settled

Resolved or Rejected

--------------------------

Promise.any()

✔ First Successful

Ignores Rejections

Fails only when

All Reject

*/



// =========================================================
// Interview Question
// =========================================================

const interviewPromise = new Promise((resolve)=>{

    setTimeout(()=>{

        resolve("Interview Cleared");

    },2000);

});

interviewPromise

.then(result=>{

    console.log(result);

});



// =========================================================
// Interview Question
// =========================================================

console.log("Start");

setTimeout(()=>{

    console.log("Async");

},0);

console.log("End");

/*

Output

Start

End

Async

Reason

setTimeout() always goes
to Web APIs and Callback Queue
before entering Call Stack.

*/



// =========================================================
// Summary
// =========================================================

/*

Synchronous

✔ One after another

-------------------------

Asynchronous

✔ Doesn't wait

-------------------------

Callback

✔ Function passed
to another function

-------------------------

Callback Hell

✔ Nested callbacks

-------------------------

Promise

✔ Pending

✔ Fulfilled

✔ Rejected

-------------------------

Promise.all()

✔ All Success

-------------------------

Promise.allSettled()

✔ Wait For All

-------------------------

Promise.race()

✔ First Settled

-------------------------

Promise.any()

✔ First Success

*/


// =========================================================
// End of File
// =========================================================
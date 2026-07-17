/*
=========================================================
        Phase 12 - Async/Await, APIs & Networking
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. async
2. await
3. try...catch
4. Error Handling
5. HTTP Basics
6. REST API
7. JSON
8. Fetch API
9. GET Request
10. POST Request
11. PUT Request
12. PATCH Request
13. DELETE Request
14. Headers
15. Request Body
16. Authentication Basics

=========================================================
*/



// =========================================================
// 1. ASYNC FUNCTION
// =========================================================

/*
An async function always
returns a Promise.
*/

async function greet(){

    return "Hello JavaScript";

}

greet().then(result=>{

    console.log(result);

});



// =========================================================
// 2. AWAIT
// =========================================================

/*
await waits for a Promise
to complete.

It can only be used
inside an async function.
*/

function getData(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve("Data Loaded");

        },2000);

    });

}

async function fetchData(){

    console.log("Loading...");

    const data = await getData();

    console.log(data);

}

fetchData();



// =========================================================
// 3. try...catch
// =========================================================

/*
Used for handling errors.
*/

async function demo(){

    try{

        throw new Error("Something Went Wrong");

    }

    catch(error){

        console.log(error.message);

    }

}

demo();



// =========================================================
// 4. ERROR HANDLING
// =========================================================

async function divide(a,b){

    try{

        if(b===0){

            throw new Error("Division by Zero");

        }

        console.log(a/b);

    }

    catch(error){

        console.log(error.message);

    }

}

divide(20,5);

divide(20,0);



// =========================================================
// 5. HTTP BASICS
// =========================================================

/*

HTTP

HyperText Transfer Protocol

Client ----> Server

Request ----> Response

Common Methods

GET

POST

PUT

PATCH

DELETE

*/



// =========================================================
// HTTP STATUS CODES
// =========================================================

/*

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

500 Internal Server Error

*/



// =========================================================
// 6. REST API
// =========================================================

/*

REST

Representational State Transfer

Example

GET

/users

POST

/users

PUT

/users/5

PATCH

/users/5

DELETE

/users/5

*/



// =========================================================
// 7. JSON
// =========================================================

/*
JSON

JavaScript Object Notation

Used for data exchange.
*/

const user={

    name:"Abhi",

    age:22

};

const jsonData = JSON.stringify(user);

console.log(jsonData);

const object = JSON.parse(jsonData);

console.log(object);



// =========================================================
// 8. FETCH API
// =========================================================

/*
Syntax

fetch(url)

Returns Promise
*/


fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>response.json())

.then(data=>{

    console.log(data);

});



// =========================================================
// 9. FETCH USING ASYNC/AWAIT
// =========================================================

async function getUsers(){

    try{

        const response = await fetch(

            "https://jsonplaceholder.typicode.com/users"

        );

        const users = await response.json();

        console.log(users);

    }

    catch(error){

        console.log(error);

    }

}

getUsers();



// =========================================================
// 10. GET REQUEST
// =========================================================

async function getPosts(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts"

    );

    const data = await response.json();

    console.log(data);

}

getPosts();



// =========================================================
// 11. POST REQUEST
// =========================================================

async function createPost(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts",

        {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                title:"JavaScript",

                body:"Learning Fetch",

                userId:1

            })

        }

    );

    const result = await response.json();

    console.log(result);

}

createPost();



// =========================================================
// 12. PUT REQUEST
// =========================================================

async function updatePost(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts/1",

        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                id:1,

                title:"Updated",

                body:"Updated Body",

                userId:1

            })

        }

    );

    console.log(await response.json());

}

updatePost();



// =========================================================
// 13. PATCH REQUEST
// =========================================================

async function patchPost(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts/1",

        {

            method:"PATCH",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                title:"Patched Title"

            })

        }

    );

    console.log(await response.json());

}

patchPost();



// =========================================================
// 14. DELETE REQUEST
// =========================================================

async function deletePost(){

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/posts/1",

        {

            method:"DELETE"

        }

    );

    console.log(response.status);

}

deletePost();



// =========================================================
// 15. HEADERS
// =========================================================

/*
Headers provide
additional information
about the request.
*/

const headersExample={

    headers:{

        "Content-Type":"application/json",

        "Authorization":"Bearer TOKEN"

    }

};

console.log(headersExample);



// =========================================================
// 16. REQUEST BODY
// =========================================================

/*
Request Body

Used with

POST

PUT

PATCH
*/

const bodyExample={

    body:JSON.stringify({

        name:"Abhi",

        age:22

    })

};

console.log(bodyExample);



// =========================================================
// 17. AUTHENTICATION BASICS
// =========================================================

/*

Authentication

Verifies User Identity.

Common Methods

1. Username Password

2. JWT Token

3. OAuth

4. API Key

*/


// Bearer Token Example

fetch("https://example.com/profile",{

    headers:{

        Authorization:"Bearer YOUR_TOKEN"

    }

});



// API Key Example

fetch("https://example.com/weather",{

    headers:{

        "x-api-key":"YOUR_API_KEY"

    }

});



// =========================================================
// COMPLETE EXAMPLE
// =========================================================

async function fetchProducts(){

    try{

        const response = await fetch(

            "https://fakestoreapi.com/products"

        );

        if(!response.ok){

            throw new Error("Failed");

        }

        const products = await response.json();

        console.log(products);

    }

    catch(error){

        console.log(error.message);

    }

}

fetchProducts();



// =========================================================
// Fetch Response Properties
// =========================================================

/*

response.ok

response.status

response.statusText

response.headers

response.url

response.json()

response.text()

*/



// =========================================================
// Interview Question
// =========================================================

async function interview(){

    try{

        const response = await fetch(

            "https://jsonplaceholder.typicode.com/todos/1"

        );

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

interview();



// =========================================================
// Summary
// =========================================================

/*

async

✔ Returns Promise

---------------------

await

✔ Waits for Promise

---------------------

try...catch

✔ Error Handling

---------------------

HTTP

✔ Client Server Communication

---------------------

REST

✔ API Architecture

---------------------

JSON

✔ Data Format

---------------------

Fetch API

✔ Make HTTP Requests

---------------------

GET

✔ Read Data

---------------------

POST

✔ Create Data

---------------------

PUT

✔ Replace Data

---------------------

PATCH

✔ Update Data

---------------------

DELETE

✔ Remove Data

---------------------

Headers

✔ Additional Information

---------------------

Request Body

✔ Data Sent to Server

---------------------

Authentication

✔ JWT

✔ OAuth

✔ API Key

✔ Bearer Token

*/


// =========================================================
// END OF FILE
// =========================================================
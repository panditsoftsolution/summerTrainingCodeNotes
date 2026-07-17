/*
=========================================================
        Phase 14 - Browser Storage
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Browser Storage Introduction
2. localStorage
3. sessionStorage
4. Cookies
5. JSON.stringify()
6. JSON.parse()

=========================================================
*/



// =========================================================
// 1. BROWSER STORAGE
// =========================================================

/*

Browser Storage allows websites
to store data inside the user's browser.

Types

1. localStorage

2. sessionStorage

3. Cookies

Comparison

------------------------------------------------------
Storage          Capacity      Expiry
------------------------------------------------------
localStorage      ~5MB        Never
sessionStorage    ~5MB        Until Tab Closes
Cookies           ~4KB        Configurable
------------------------------------------------------

*/


// =========================================================
// 2. LOCAL STORAGE
// =========================================================

/*
Data remains even after
browser is closed.
*/


// Store Data

localStorage.setItem("username","Abhi");


// Read Data

console.log(localStorage.getItem("username"));


// Update Data

localStorage.setItem("username","Rahul");


// Remove One Item

localStorage.removeItem("username");


// Remove Everything

// localStorage.clear();



// =========================================================
// Store Number
// =========================================================

localStorage.setItem("age",22);

console.log(localStorage.getItem("age"));

/*
Everything in localStorage
is stored as a STRING.
*/

console.log(typeof localStorage.getItem("age"));



// =========================================================
// Store Boolean
// =========================================================

localStorage.setItem("isLoggedIn",true);

console.log(localStorage.getItem("isLoggedIn"));



// =========================================================
// Store Array
// =========================================================

const skills=[

    "HTML",

    "CSS",

    "JavaScript"

];

localStorage.setItem(

    "skills",

    JSON.stringify(skills)

);

const storedSkills=JSON.parse(

    localStorage.getItem("skills")

);

console.log(storedSkills);



// =========================================================
// Store Object
// =========================================================

const student={

    name:"Abhi",

    age:22,

    course:"JavaScript"

};

localStorage.setItem(

    "student",

    JSON.stringify(student)

);

const storedStudent=JSON.parse(

    localStorage.getItem("student")

);

console.log(storedStudent);



// =========================================================
// 3. SESSION STORAGE
// =========================================================

/*
Data exists only
until browser tab closes.
*/


sessionStorage.setItem(

    "theme",

    "dark"

);

console.log(

    sessionStorage.getItem("theme")

);


sessionStorage.removeItem("theme");


// sessionStorage.clear();



// =========================================================
// localStorage vs sessionStorage
// =========================================================

/*

localStorage

✔ Permanent

✔ Shared across tabs
(same origin)

--------------------------

sessionStorage

✔ Temporary

✔ Only current tab

*/



// =========================================================
// 4. COOKIES
// =========================================================

/*
Cookies store
small amounts of data.

Maximum Size

Around 4KB
*/


// Create Cookie

document.cookie="username=Abhi";


// Another Cookie

document.cookie="theme=dark";


// Read Cookies

console.log(document.cookie);



// Cookie With Expiry

document.cookie=

"name=Rahul; expires=Fri, 31 Dec 2030 12:00:00 UTC";



// Cookie With Path

document.cookie=

"user=Admin; path=/";



// =========================================================
// Delete Cookie
// =========================================================

document.cookie=

"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";



// =========================================================
// 5. JSON.stringify()
// =========================================================

/*
Converts

Object

to

JSON String
*/

const user={

    name:"Abhi",

    age:22

};

const json=JSON.stringify(user);

console.log(json);

console.log(typeof json);



// =========================================================
// Array Example
// =========================================================

const numbers=[1,2,3,4];

const jsonArray=JSON.stringify(numbers);

console.log(jsonArray);



// =========================================================
// 6. JSON.parse()
// =========================================================

/*
Converts

JSON String

to

JavaScript Object
*/

const object=JSON.parse(json);

console.log(object);

console.log(typeof object);



// =========================================================
// Example
// =========================================================

const jsonText='{"city":"Delhi","country":"India"}';

const location=JSON.parse(jsonText);

console.log(location);



// =========================================================
// Mini Project
// =========================================================

/*
Save User Information
*/

const profile={

    username:"Abhi",

    email:"abhi@gmail.com",

    age:22

};

localStorage.setItem(

    "profile",

    JSON.stringify(profile)

);

const savedProfile=JSON.parse(

    localStorage.getItem("profile")

);

console.log(savedProfile);



// =========================================================
// Theme Preference Example
// =========================================================

localStorage.setItem(

    "theme",

    "dark"

);

const theme=localStorage.getItem("theme");

if(theme==="dark"){

    console.log("Dark Theme Enabled");

}



// =========================================================
// Login Example
// =========================================================

localStorage.setItem(

    "isLoggedIn",

    "true"

);

if(localStorage.getItem("isLoggedIn")==="true"){

    console.log("Welcome Back");

}



// =========================================================
// Session Example
// =========================================================

sessionStorage.setItem(

    "currentPage",

    "Dashboard"

);

console.log(

    sessionStorage.getItem("currentPage")

);



// =========================================================
// Storage Methods
// =========================================================

/*

setItem()

Store Data

------------------------

getItem()

Read Data

------------------------

removeItem()

Remove One Item

------------------------

clear()

Remove All Data

------------------------

key(index)

Get Key by Index

------------------------

length

Number of Stored Items

*/



// Example

console.log(localStorage.length);

console.log(localStorage.key(0));



// =========================================================
// Cookies vs Local Storage
// =========================================================

/*

Cookies

✔ 4KB

✔ Sent with HTTP Request

✔ Expiry Available

-----------------------------

localStorage

✔ 5MB

✔ Never Sent Automatically

✔ Permanent

-----------------------------

sessionStorage

✔ Temporary

✔ Current Tab Only

*/



// =========================================================
// Interview Questions
// =========================================================

// Store Object

const employee={

    id:1,

    name:"Rahul"

};

localStorage.setItem(

    "employee",

    JSON.stringify(employee)

);


// Read Object

const emp=JSON.parse(

    localStorage.getItem("employee")

);

console.log(emp);



// =========================================================
// Summary
// =========================================================

/*

Browser Storage

✔ Stores data in browser

-------------------------

localStorage

✔ Permanent

✔ 5MB

-------------------------

sessionStorage

✔ Temporary

✔ Current Tab

-------------------------

Cookies

✔ 4KB

✔ Expiry

✔ Sent to Server

-------------------------

JSON.stringify()

✔ Object → JSON String

-------------------------

JSON.parse()

✔ JSON String → Object

*/


// =========================================================
// END OF FILE
// =========================================================
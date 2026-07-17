/*
=========================================================
        Phase 10 - JavaScript Events
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Event Listeners
2. Event Object
3. Event Bubbling
4. Event Capturing
5. Event Delegation
6. preventDefault()
7. stopPropagation()

=========================================================
*/


// =========================================================
// 1. EVENT LISTENERS
// =========================================================

/*
Events are actions performed by the user.

Examples

✔ Click
✔ Double Click
✔ Mouse Over
✔ Key Press
✔ Submit
✔ Scroll
✔ Resize

Syntax

element.addEventListener(event, callback);
*/


const button = document.querySelector("#btn");

button.addEventListener("click", function(){

    console.log("Button Clicked");

});



// Arrow Function

button.addEventListener("click", () => {

    console.log("Arrow Function Click");

});



// =========================================================
// Common Events
// =========================================================

/*

click

dblclick

mouseover

mouseout

mouseenter

mouseleave

keydown

keyup

keypress

input

change

submit

focus

blur

scroll

resize

*/


// =========================================================
// 2. EVENT OBJECT
// =========================================================

/*
Whenever an event occurs,

JavaScript automatically passes
an Event Object.

Usually named e or event.
*/

button.addEventListener("click", function(e){

    console.log(e);

});



// Target Element

button.addEventListener("click", function(e){

    console.log(e.target);

});



// Event Type

button.addEventListener("click", function(e){

    console.log(e.type);

});



// Mouse Position

document.addEventListener("click", function(e){

    console.log(e.clientX);
    console.log(e.clientY);

});



// Keyboard Example

document.addEventListener("keydown", function(e){

    console.log(e.key);

});



// =========================================================
// 3. EVENT BUBBLING
// =========================================================

/*
Event Bubbling

Child → Parent → Grand Parent

Default behavior of JavaScript
*/


const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

parent.addEventListener("click", function(){

    console.log("Parent Clicked");

});

child.addEventListener("click", function(){

    console.log("Child Clicked");

});


/*

If Child is clicked

Output

Child Clicked

Parent Clicked

*/



// =========================================================
// 4. EVENT CAPTURING
// =========================================================

/*
Capturing

Parent → Child

Enable by passing

true

as third parameter.
*/


parent.addEventListener("click", function(){

    console.log("Parent Capture");

}, true);


child.addEventListener("click", function(){

    console.log("Child Capture");

}, true);


/*

Output

Parent Capture

Child Capture

*/



// =========================================================
// Bubbling vs Capturing
// =========================================================

/*

Bubbling

Child → Parent

(Default)

------------------------

Capturing

Parent → Child

(add true)

*/



// =========================================================
// 5. EVENT DELEGATION
// =========================================================

/*
Instead of adding listeners
to every child,

add one listener
to parent.
*/


const list = document.querySelector("#list");

list.addEventListener("click", function(e){

    if(e.target.tagName==="LI"){

        console.log(e.target.innerText);

    }

});


/*

HTML

<ul id="list">

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

*/



// =========================================================
// Dynamic Elements
// =========================================================

const newItem = document.createElement("li");

newItem.innerText = "React";

list.appendChild(newItem);

/*
No need to attach
new event listener.

Delegation handles it.
*/



// =========================================================
// 6. preventDefault()
// =========================================================

/*
Stops browser's default behavior.
*/


const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    console.log("Form Submitted");

});



// Anchor Example

const link = document.querySelector("a");

link.addEventListener("click", function(e){

    e.preventDefault();

    console.log("Navigation Prevented");

});



// =========================================================
// 7. stopPropagation()
// =========================================================

/*
Stops event bubbling.
*/


child.addEventListener("click", function(e){

    e.stopPropagation();

    console.log("Child Only");

});


/*

Click Child

Output

Child Only

Parent won't execute

*/



// =========================================================
// Mouse Events
// =========================================================

const box = document.querySelector(".box");

box.addEventListener("mouseover",()=>{

    console.log("Mouse Over");

});

box.addEventListener("mouseout",()=>{

    console.log("Mouse Out");

});



// =========================================================
// Keyboard Events
// =========================================================

const input = document.querySelector("input");

input.addEventListener("keydown",(e)=>{

    console.log("Pressed:",e.key);

});

input.addEventListener("keyup",(e)=>{

    console.log("Released:",e.key);

});



// =========================================================
// Input Event
// =========================================================

input.addEventListener("input",(e)=>{

    console.log(e.target.value);

});



// =========================================================
// Change Event
// =========================================================

input.addEventListener("change",(e)=>{

    console.log("Final Value:",e.target.value);

});



// =========================================================
// Focus & Blur
// =========================================================

input.addEventListener("focus",()=>{

    console.log("Input Focused");

});

input.addEventListener("blur",()=>{

    console.log("Input Lost Focus");

});



// =========================================================
// Window Events
// =========================================================

window.addEventListener("resize",()=>{

    console.log(window.innerWidth);

});


window.addEventListener("scroll",()=>{

    console.log(window.scrollY);

});



// =========================================================
// Mini Project Example
// =========================================================

const colorButton = document.querySelector("#changeColor");

colorButton.addEventListener("click",()=>{

    document.body.style.backgroundColor="lightblue";

});



// =========================================================
// Interview Question
// =========================================================

// Which element was clicked?

document.addEventListener("click",(e)=>{

    console.log(e.target);

});



// =========================================================
// Interview Question
// =========================================================

// Event Delegation

document.querySelector("#menu")
.addEventListener("click",(e)=>{

    if(e.target.matches("li")){

        console.log(e.target.innerText);

    }

});



// =========================================================
// Summary Table
// =========================================================

/*

addEventListener()

Attach Events

-----------------------

Event Object

e.target

e.type

e.key

clientX

clientY

-----------------------

Bubbling

Child → Parent

(Default)

-----------------------

Capturing

Parent → Child

(true)

-----------------------

Delegation

One Parent Listener

-----------------------

preventDefault()

Stops Default Browser Action

-----------------------

stopPropagation()

Stops Bubbling

*/


// =========================================================
// End of File
// =========================================================
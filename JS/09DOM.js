/*
=========================================================
        Phase 9 - DOM (Document Object Model)
        Complete JavaScript Notes
        Author: Abhi
=========================================================

Topics Covered

1. Introduction to DOM
2. Selecting Elements
3. Modifying Elements
4. Styling Elements
5. Creating Elements
6. Removing Elements
7. DOM Traversal

=========================================================
*/


// =========================================================
// 1. INTRODUCTION TO DOM
// =========================================================

/*

DOM = Document Object Model

The DOM is a programming interface
for HTML documents.

JavaScript uses the DOM to:

✔ Access HTML Elements
✔ Change Content
✔ Change Styles
✔ Add New Elements
✔ Remove Elements
✔ Handle Events

Example HTML

<body>

<h1 id="heading">Hello</h1>

<p class="para">Paragraph</p>

<button>Click</button>

</body>

*/


// =========================================================
// 2. SELECTING ELEMENTS
// =========================================================

/*
There are many ways to select elements.
*/


// By ID

const heading = document.getElementById("heading");

// By Class

const paragraphs = document.getElementsByClassName("para");

// By Tag

const divs = document.getElementsByTagName("div");

// Query Selector (First Match)

const btn = document.querySelector("button");

// Query Selector All

const items = document.querySelectorAll(".item");

console.log(heading);
console.log(paragraphs);
console.log(divs);
console.log(btn);
console.log(items);



// =========================================================
// Difference
// =========================================================

/*

getElementById()

Returns one element

----------------------------

querySelector()

Returns first matching element

----------------------------

querySelectorAll()

Returns NodeList

----------------------------

getElementsByClassName()

Returns HTMLCollection

*/


// =========================================================
// 3. MODIFYING ELEMENTS
// =========================================================

// Change Text

heading.innerText = "Welcome";

// Change HTML

heading.innerHTML = "<span>Hello JavaScript</span>";

// textContent

heading.textContent = "Learning DOM";



// Change Attributes

const image = document.querySelector("img");

image.src = "image.jpg";

image.alt = "Laptop Image";



// Get Attribute

console.log(image.getAttribute("src"));



// Set Attribute

image.setAttribute("width","300");



// Remove Attribute

image.removeAttribute("width");



// =========================================================
// 4. STYLING ELEMENTS
// =========================================================

const title = document.querySelector("h1");

// Change CSS

title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "40px";



// =========================================================
// classList
// =========================================================

const box = document.querySelector(".box");

// Add Class

box.classList.add("active");

// Remove Class

box.classList.remove("active");

// Toggle Class

box.classList.toggle("dark");

// Check Class

console.log(box.classList.contains("dark"));



// =========================================================
// 5. CREATING ELEMENTS
// =========================================================

// Create Element

const newPara = document.createElement("p");

// Add Text

newPara.innerText = "This is a new paragraph.";

// Append

document.body.appendChild(newPara);



// Create List Item

const li = document.createElement("li");

li.innerText = "JavaScript";

document.querySelector("ul").appendChild(li);



// Insert Before

const list = document.querySelector("ul");

const firstItem = list.firstElementChild;

const newItem = document.createElement("li");

newItem.innerText = "HTML";

list.insertBefore(newItem, firstItem);



// =========================================================
// append() vs appendChild()
// =========================================================

/*

append()

✔ Multiple Elements
✔ Text Allowed

appendChild()

✔ Only One Node

*/


// =========================================================
// 6. REMOVING ELEMENTS
// =========================================================

// Remove Element

newPara.remove();



// Remove Child

list.removeChild(firstItem);



// =========================================================
// 7. DOM TRAVERSAL
// =========================================================

const parent = document.querySelector(".parent");


// Parent

console.log(parent.parentElement);


// Children

console.log(parent.children);


// First Child

console.log(parent.firstElementChild);


// Last Child

console.log(parent.lastElementChild);


// Next Sibling

console.log(parent.nextElementSibling);


// Previous Sibling

console.log(parent.previousElementSibling);



// =========================================================
// Example
// =========================================================

const card = document.querySelector(".card");

console.log(card.parentElement);

console.log(card.children);

console.log(card.firstElementChild);

console.log(card.lastElementChild);



// =========================================================
// Difference
// =========================================================

/*

parentNode

Returns Parent Node

-------------------------

parentElement

Returns Parent Element

-------------------------

children

Returns HTMLCollection

-------------------------

childNodes

Returns All Nodes

(text, comments, elements)

*/


// =========================================================
// Common DOM Methods
// =========================================================

/*

document.getElementById()

document.querySelector()

document.querySelectorAll()

createElement()

append()

appendChild()

remove()

removeChild()

setAttribute()

getAttribute()

classList.add()

classList.remove()

classList.toggle()

classList.contains()

*/


// =========================================================
// Mini Project Example
// =========================================================

// Create Button

const button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(button);


// Create Paragraph

const paragraph = document.createElement("p");

paragraph.innerText = "Waiting...";

document.body.appendChild(paragraph);


// Change Text

button.onclick = function(){

    paragraph.innerText = "Button Clicked!";

};



// =========================================================
// Interview Questions
// =========================================================

// 1

console.log(document.querySelector("#heading"));

// 2

console.log(document.querySelectorAll("li"));

// 3

const demo = document.createElement("div");

demo.innerText = "Hello";

document.body.appendChild(demo);

// 4

demo.style.color = "blue";

demo.style.fontWeight = "bold";

// 5

demo.remove();



// =========================================================
// Summary
// =========================================================

/*

DOM

✔ Represents HTML as Objects

Selecting

✔ getElementById()

✔ querySelector()

✔ querySelectorAll()

Modifying

✔ innerText

✔ innerHTML

✔ textContent

✔ setAttribute()

Styling

✔ style.property

✔ classList

Creating

✔ createElement()

✔ append()

✔ appendChild()

Removing

✔ remove()

✔ removeChild()

Traversal

✔ parentElement

✔ children

✔ firstElementChild

✔ lastElementChild

✔ nextElementSibling

✔ previousElementSibling

*/


// =========================================================
// End of File
// =========================================================
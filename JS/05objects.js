// ==========================================================
// PHASE 5 - OBJECTS
// Topics:
// ✔ Creating Objects
// ✔ Accessing Properties
// ✔ Updating Properties
// ✔ Nested Objects
// ✔ Object Methods
// ✔ this Keyword
// ✔ Object Destructuring
// ✔ Spread Operator
// ✔ Object.keys()
// ✔ Object.values()
// ✔ Object.entries()
// ✔ Object.assign()
// ✔ Object.freeze()
// ==========================================================

console.log("========== CREATING OBJECT ==========");

let student = {
    name: "Abhi",
    age: 22,
    course: "B.Tech"
};

console.log(student);

// ==========================================================

console.log("\n========== ACCESSING PROPERTIES ==========");

// Dot Notation
console.log(student.name);
console.log(student.age);

// Bracket Notation
console.log(student["course"]);

// ==========================================================

console.log("\n========== ADDING & UPDATING PROPERTIES ==========");

// Add Property
student.city = "London";

// Update Property
student.age = 23;

console.log(student);

// Delete Property
delete student.course;

console.log(student);

// ==========================================================

console.log("\n========== NESTED OBJECT ==========");

let employee = {

    id: 101,

    name: "Rahul", 
    address: {

        city: "Delhi",

        state: "Delhi",

        pincode: 110001

    }

};

console.log(employee);

console.log(employee.address.city);

console.log(employee.address.pincode);

// ==========================================================

console.log("\n========== OBJECT METHODS ==========");

let person = {

    firstName: "Abhi",

    lastName: "Kumar",

    fullName: function () {

        console.log(this.firstName + " " + this.lastName);

    }

};

person.fullName();

// ==========================================================

console.log("\n========== THIS KEYWORD ==========");

let car = {

    brand: "BMW",

    model: "X5",

    details() {

        console.log(this.brand);

        console.log(this.model);

    }

};

car.details();

// ==========================================================

console.log("\n========== OBJECT DESTRUCTURING ==========");

let user = {

    username: "abhi",

    email: "abhi@gmail.com",

    country: "India"

};

const { username, email, country } = user;

console.log(username);

console.log(email);

console.log(country);

// Rename Variable

const { username: userName } = user;

console.log(userName);

// ==========================================================

console.log("\n========== SPREAD OPERATOR ==========");

let obj1 = {

    name: "Abhi",

    age: 22

};

let obj2 = {

    city: "London",

    state: "Bihar"

};

let mergedObject = {

    ...obj1,

    ...obj2

};

console.log(mergedObject);

// Copy Object

let copyObject = {

    ...obj1

};

console.log(copyObject);

// ==========================================================

console.log("\n========== OBJECT.KEYS() ==========");

console.log(Object.keys(student));

// ==========================================================

console.log("\n========== OBJECT.VALUES() ==========");

console.log(Object.values(student));

// ==========================================================

console.log("\n========== OBJECT.ENTRIES() ==========");

console.log(Object.entries(student));

// ==========================================================

console.log("\n========== OBJECT.ASSIGN() ==========");
//Object.assign(target, source1, source2)
let details = {

    course: "JavaScript",

    duration: "2 Months"

};

let finalObject = Object.assign({}, student, details);

console.log(finalObject);

// ==========================================================

console.log("\n========== OBJECT.FREEZE() ==========");

let mobile = {

    brand: "Samsung",

    price: 25000

};

Object.freeze(mobile);

// These will not work

mobile.price = 50000;

mobile.color = "Black";

delete mobile.brand;

console.log(mobile);

// ==========================================================

console.log("\n========== LOOP THROUGH OBJECT ==========");

let laptop = {

    brand: "HP",

    ram: "16GB",

    processor: "i5"

};

for (let key in laptop) {

    console.log(key + " : " + laptop[key]);

}

// ==========================================================

console.log("\n========== PRACTICAL EXAMPLE ==========");

let product = {

    id: 1,

    name: "Laptop",

    price: 50000,

    stock: true,

    seller: {

        name: "ABC Store",

        city: "Patna"

    },

    display() {

        console.log("Product Name :", this.name);

        console.log("Price :", this.price);

        console.log("Seller :", this.seller.name);

    }

};

product.display();

// ==========================================================

console.log("\n========== MINI PROJECT 1 ==========");

// Student Report Card

let report = {

    name: "Rahul",

    maths: 90,

    english: 85,

    science: 80,

    total() {

        return this.maths + this.english + this.science;

    }

};

console.log(report.total());

// ==========================================================

console.log("\n========== MINI PROJECT 2 ==========");

// Shopping Cart

let cart = {

    item: "Mouse",

    quantity: 2,

    price: 500,

    totalPrice() {

        return this.quantity * this.price;

    }

};

console.log(cart.totalPrice());

// ==========================================================

console.log("\n========== MINI PROJECT 3 ==========");

// Employee Information

let emp = {

    id: 101,

    name: "Amit",

    department: "IT",

    salary: 60000

};

console.log(Object.keys(emp));

console.log(Object.values(emp));

console.log(Object.entries(emp));

// ==========================================================

console.log("\n========== MINI PROJECT 4 ==========");

// Clone Object

let original = {

    name: "JavaScript",

    version: "ES6"

};

let clone = {

    ...original

};

console.log(clone);

// ==========================================================

console.log("\n========== MINI PROJECT 5 ==========");

// Merge Objects

let personal = {

    name: "Abhi",

    age: 22

};

let education = {

    course: "B.Tech",

    college: "BBSBEC"

};

let profile = {

    ...personal,

    ...education

};

console.log(profile);

// ==========================================================

console.log("\n========== PRACTICE QUESTIONS ==========");

console.log("1. Create a Student Object.");
console.log("2. Print all keys of an object.");
console.log("3. Print all values of an object.");
console.log("4. Merge two objects.");
console.log("5. Clone an object.");
console.log("6. Create a nested object.");
console.log("7. Use object destructuring.");
console.log("8. Use this keyword in an object.");
console.log("9. Freeze an object.");
console.log("10. Create a Product object with a totalPrice() method.");

// ==========================================================

console.log("\n========== END OF PHASE 5 ==========");
// ==========================================================
// PHASE 3 - ARRAYS
// Topics:
// Creating Arrays
// push(), pop(), shift(), unshift()
// slice(), splice()
// concat(), join()
// reverse(), sort()
// map(), filter(), reduce()
// find(), findIndex()
// some(), every()
// includes()
// flat(), flatMap()
// ==========================================================

console.log("========== CREATING ARRAYS ==========");

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// ==========================================================

console.log("\n========== PUSH ==========");

fruits.push("Orange");

console.log(fruits);

// ==========================================================

console.log("\n========== POP ==========");

fruits.pop();

console.log(fruits);

// ==========================================================

console.log("\n========== SHIFT ==========");

fruits.shift();

console.log(fruits);

// ==========================================================

console.log("\n========== UNSHIFT ==========");

fruits.unshift("Apple");

console.log(fruits);

// ==========================================================

console.log("\n========== SLICE ==========");

let numbers = [10,20,30,40,50];

console.log(numbers.slice(1,4));

console.log(numbers);

// ==========================================================

console.log("\n========== SPLICE ==========");

let nums = [1,2,3,4,5];

nums.splice(2,2,100,200);

console.log(nums);

// ==========================================================

console.log("\n========== CONCAT ==========");

let arr1=[1,2];
let arr2=[3,4];

let merged=arr1.concat(arr2);

console.log(merged);

// ==========================================================

console.log("\n========== JOIN ==========");

let colors=["Red","Green","Blue"];

console.log(colors.join());

console.log(colors.join("-"));

console.log(colors.join(" | "));

// ==========================================================

console.log("\n========== REVERSE ==========");

let reverseArr=[1,2,3,4,5];

reverseArr.reverse();

console.log(reverseArr);

// ==========================================================

console.log("\n========== SORT ==========");

let values=[8,1,10,4,15];

values.sort((a,b)=>a-b);

console.log(values);

// ==========================================================

console.log("\n========== MAP ==========");

let nums1=[1,2,3,4];

let square=nums1.map(num=>num*num);

console.log(square);

// ==========================================================

console.log("\n========== FILTER ==========");

let even=nums1.filter(num=>num%2===0);

console.log(even);

// ==========================================================

console.log("\n========== REDUCE ==========");

let sum=nums1.reduce((acc,num)=>acc+num,0);

console.log(sum);

// ==========================================================

console.log("\n========== FIND ==========");

let students=[
    {id:1,name:"Abhi"},
    {id:2,name:"Rahul"},
    {id:3,name:"Ravi"}
];

let student=students.find(s=>s.id===2);

console.log(student);

// ==========================================================

console.log("\n========== FIND INDEX ==========");

let index=students.findIndex(s=>s.name==="Ravi");

console.log(index);

// ==========================================================

console.log("\n========== SOME ==========");

let marks=[55,60,90,40];

console.log(marks.some(mark=>mark<50));

// ==========================================================

console.log("\n========== EVERY ==========");

console.log(marks.every(mark=>mark>=35));

// ==========================================================

console.log("\n========== INCLUDES ==========");

let languages=["HTML","CSS","JavaScript"];

console.log(languages.includes("CSS"));

console.log(languages.includes("React"));

// ==========================================================

console.log("\n========== FLAT ==========");

let nested=[1,[2,3],[4,[5,6]]];

console.log(nested.flat());

console.log(nested.flat(2));

// ==========================================================

console.log("\n========== FLAT MAP ==========");

let words=["Hello World","Learn JS"];

let result=words.flatMap(word=>word.split(" "));

console.log(result);

// ==========================================================

console.log("\n========== MINI PRACTICE ==========");

// Double every number

let data=[2,4,6,8];

console.log(data.map(num=>num*2));

// Numbers greater than 50

let scores=[20,55,80,90];

console.log(scores.filter(score=>score>50));

// Total Marks

console.log(scores.reduce((a,b)=>a+b));

// Highest Number

console.log(Math.max(...scores));

// ==========================================================

console.log("\n========== END OF PHASE 3 ==========");
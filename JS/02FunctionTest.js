// console.log("\n========== PRACTICE QUESTIONS ==========");

//done console.log("1. Write a function to check Prime Number.");
//done console.log("2. Write a function to reverse a string.");
//done console.log("3. Write a recursive Fibonacci function.");
// console.log("4. Find maximum number using a function.");
// console.log("5. Create your own calculator.");
//done console.log("6. Use callback to print Welcome Student.");
//done console.log("7. Merge two arrays using Spread.");
//done console.log("8. Find average using Rest Parameter.");
//done console.log("9. Find factorial using recursion.");
//done console.log("10. Create an arrow function to calculate square.");

// function isPrime(n){ 
//   if(n<=1) return false;

//   for(let i = 2; i<=Math.sqrt(n);i++){

//     if(n%i ==0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(`the given number is prime ? ${isPrime(10)}`);

// function reverseString(str){ 
//   let reversed = "";
//   for(let i=str.length - 1;i>=0; i--){
//     reversed += str[i]
//   } 
//   return reversed;
// }
// console.log(reverseString("Hello"));

// let str = "lal"
// let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);


// function fab(n){
//   if(n==0) return 0; 
//   if(n==1) return 1; 
//   return fab(n-2) + fab(n-1);
// }
// // console.log(fab(10));
// for(let i=0;i<10;i++){
//   console.log(fab(i));
// }

// function Student(){ 
//   console.log('welcome stundent to callback');
  
// }
// function welcome(callback){ 
//   callback()
// }

// welcome(Student);

// let arr1 = ['Hello', 'sir'];
// let arr2 = ['how', 'are', 'you ?'];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// function Avg(...nums){
//   let sum =0;
//   let count = 0;
//   for (const element of nums) {
//       sum +=element;
//       count++;
//   }
//   return sum/count;
// }
// console.log(Avg(2, 4, 6)); 
// console.log(Avg(12, 14, 17)); 

// function factorial(n){
//   if(n==0 || n==1) return 1;

//   return n * factorial(n-1);
// }
// console.log(factorial(5));

let sq = (n)=>{
  return n*n;
}
console.log(sq(34));

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

//console.log("Welcome to the bootcamp

// 1. Leave a comment in the code identifying the type of error
// SyntaxError: Missing closing quotation mark and parenthesis

//2. Correct the error
// Program A
console.log("Welcome to the bootcamp");

//3. Verify the fix
//After correcting, if you run the program, the output will be:
//Welcome to the bootcamp




// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

//let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// 1. Leave a comment in the code identifying the type of error
// Runtime Error: Multiplying a string with a number results in NaN
// SyntaxError: Missing closing brace for the for loop

// 2. Correct the error
// Program B
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping non-numeric value: "${numbers[i]}"`);
  }
}

// 3. Verify the fix
4
8
//Skipping non-numeric value: "eight"





// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// 1. Leave a comment in the code identifying the type of error
// Logic Error: The return values are reversed.
// Returning true when num is divisible by i — that means it's NOT prime.
// Should return false in that case.
// Final return should be true to indicate the number IS prime.

// 2. Correct the error
// Program C
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so NOT prime
    }
  }
  return true; // num is only divisible by 1 and itself — IS prime
}

// 3. Verify the fix
console.log(isPrime(7));   // true
console.log(isPrime(4));   // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // false

true
false
true
false


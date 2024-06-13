// Task 1: Declare variables
let num1, num2;

// Task 2: Assign sample numeric values
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators
num1 += 5; // Increment num1 by 5
num2 -= 3; // Decrement num2 by 3

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators
let isPositive = num1 > 0 && num2 > 0; // Check if both numbers are positive
let isEven = num1 % 2 === 0 || num2 % 2 === 0; // Check if at least one number is even

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);

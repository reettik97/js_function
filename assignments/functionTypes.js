// Write the below function in five different forms. i.e
// 1. Function Decleration                     
// 2. Function Expression                      
// 3. Arrow Function Without Curly Braces      
// 4. Arrow Function With Curly Braces         
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function (n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket
let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function increment(n) {
  return n + 1;
}
// 2. Function Expression
let increment = function (n) {
  return n + 1;
}
// 3. Arrow Function Without Curly Braces 
let increment = n => n + 1;
//Arrow Function With Curly Braces 
let increment = n => {
  return n + 1;
}
// Function Invocation
increment(5);




/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function decrement(n) {
  return n - 1;
}
//  Function Expression
let decrement = function (n) {
  return n - 1;
}
// Arrow Function Without Curly Braces 
let decrement = n => n - 1;
//Arrow Function With Curly Braces 
let decrement = n => {
  return n - 1;
}
// Function Invocation
decrement(5);




/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
function add(x, y) {
  return x + y;
}
// 2. Function Expression
let add = function (x, y) {
  return x + y;
}
// 3. Arrow Function Without Curly Braces 
let add = (x, y) => x + y;
//Arrow Function With Curly Braces 
let add = (x, y) => {
  return x + y;
}
// Function Invocation
add(3, 4);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function sub(x, y) {
  return x - y;
}
// 2. Function Expression
let sub = function (x, y) {
  return x - y;
}
// 3. Arrow Function Without Curly Braces 
let sub = (x, y) => x - y;
//Arrow Function With Curly Braces 
let sub = (x, y) => {
  return x - y;
}
// Function Invocation
sub(78, 54);



/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//Function Decleration
function mul(x, y) {
  return x * y;
}
// 2. Function Expression
let mul = function (x, y) {
  return x * y;
}
// 3. Arrow Function Without Curly Braces 
let mul = (x, y) => x * y;
//Arrow Function With Curly Braces 
let mul = (x, y) => {
  return x * y;
}
// Function Invocation
mul(90, 45);




/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration
function division(x, y) {
  return x / y;
}
// 2. Function Expression
let division = function (x, y) {
  return x / y;
}
// 3. Arrow Function Without Curly Braces 
let division = (x, y) => x / y;
//Arrow Function With Curly Braces 
let division = (x, y) => {
  return x / y;
}
// Function Invocation
division(60, 10);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration
function squared(x) {
  return x * x;
}
// 2. Function Expression
let squared = function (x) {
  return x * x;
}
// 3. Arrow Function Without Curly Braces 
let squared = n => x * x;
//Arrow Function With Curly Braces 
let squared = n => {
  return x * x;
}
// Function Invocation
squared(9);




/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */


//Function Decleration
function mathOperation(str, x, y) {
  switch (str) {
    case "add":
      console.log(x + " + " + y);
      return x + y;
    case "substract":
      console.log(x + " - " + y);
      return x - y;
    case "multiply":
      console.log(x + " * " + y);
      return x * y;
    case "divide":
      console.log(x + " / " + y);
      return x / y;
  }
}
// 2. Function Expression
let mathOperation = function (str, x, y) {
  switch (str) {
    case "add":
      console.log(x + " + " + y);
      return x + y;
    case "substract":
      console.log(x + " - " + y);
      return x - y;
    case "multiply":
      console.log(x + " * " + y);
      return x * y;
    case "divide":
      console.log(x + " / " + y);
      return x / y;
  }
}
//Arrow Function With Curly Braces 
let mathOperation = (str, x, y) => {
  switch (str) {
    case "add":
      console.log(x + " + " + y);
      return x + y;
    case "substract":
      console.log(x + " - " + y);
      return x - y;
    case "multiply":
      console.log(x + " * " + y);
      return x * y;
    case "divide":
      console.log(x + " / " + y);
      return x / y;
  }
}
// Function Invocation
mathOperation("add", 20, 20);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

// 2. Function Expression
function checkGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
let checkGreaterThan = function (a, b) {
  return (a > b) ? true : false;
}
// 3. Arrow Function Without Curly Braces 
let checkGreaterThan = (a, b) => (a > b) ? true : false;
//Arrow Function With Curly Braces 
let checkGreaterThan = (a, b) => {
  return (a > b) ? true : false;
}
// Function Invocation
checkGreaterThan(3, 8);




/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function Decleration
function checkLessThen(a, b) {
  return (a < b) ? true : false;
}
// 2. Function Expression
let checkLessThen = function (a, b) {
  return (a > b) ? false : true;
}
// 3. Arrow Function Without Curly Braces 
let checkLessThen = (a, b) => (a > b) ? false : true;
let checkLessThen = (a, b) => {
  return (a > b) ? false : true;
}
// Function Invocation
checkLessThen(23, 41);




/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Decleration
function checkEqual(a, b) {
  return (a == b) ? true : false;
}
// 2. Function Expression
let checkEqual = function (a, b) {
  return (a == b) ? true : false;
}
// 3. Arrow Function Without Curly Braces 
let checkEqual = (a, b) => (a == b) ? true : false;
//Arrow Function With Curly Braces 
let checkEqual = (a, b) => {
  return (a == b) ? true : false;
}
// Function Invocation
checkEqual(5, 5);



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//Function Decleration
function smallestValue(x, y) {
  return (x < y) ? x : y;
}
// 2. Function Expression
let smallestValue = function (x, y) {
  return (x < y) ? x : y;
}
// 3. Arrow Function Without Curly Braces 
let smallestValue = (x, y) => (x < y) ? x : y;
//Arrow Function With Curly Braces 
let smallestValue = (x, y) => {
  return (x < y) ? x : y;
}
// Function Invocation
smallestValue(8, 9);



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Function Decleration
function largestValue(x, y) {
  return (x > y) ? x : y;
}
// 2. Function Expression
let largestValue = function (x, y) {
  return (x > y) ? x : y;
}
// 3. Arrow Function Without Curly Braces 
let largestValue = (x, y) => (x > y) ? x : y;
//Arrow Function With Curly Braces 
let largestValue = (x, y) => {
  return (x > y) ? x : y;
}
// Function Invocation
largestValue(8, 5);



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Decleration
function checkEven(n) {
  return (n % 2 == 0) ? true : false;
}
// 2. Function Expression
let checkEven = function (n) {
  return (n % 2 == 0) ? true : false;
}
// 3. Arrow Function Without Curly Braces 
let checkEven = n => (n % 2 == 0) ? true : false;
//Arrow Function With Curly Braces 
let checkEven = n => {
  return (n % 2 == 0) ? true : false;
}
// Function Invocation
checkEven(8);



/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function Decleration
function checkOdd(n) {
  return (n % 2 == 0) ? false : true;
}
// 2. Function Expression
let checkOdd = function (n) {
  return (n % 2 == 0) ? false : true;
}
// 3. Arrow Function Without Curly Braces 
let checkOdd = n => (n % 2 == 0) ? false : true;
//Arrow Function With Curly Braces 
let checkOdd = n => {
  return (n % 2 == 0) ? false : true;
}
// Function Invocation
checkOdd(9);




/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function Decleration
function grade(score, total) {
  var parcentage = (score * 100) / total;
  switch (parcentage) {
    case (parcentage >= 90):
      return "A";
    case (parcentage >= 80):
      return "B";
    case (parcentage >= 70):
      return "C";
    case (parcentage >= 60):
      return "D";
    default:
      return "F";
  }
}
// 2. Function Expression
let grade = function (score, total) {
  var parcentage = (score * 100) / total;
  switch (parcentage) {
    case (parcentage >= 90):
      return "A";
    case (parcentage >= 80):
      return "B";
    case (parcentage >= 70):
      return "C";
    case (parcentage >= 60):
      return "D";
    default:
      return "F";
  }
}
//Arrow Function With Curly Braces 
let grade = (score, total) => {
  var parcentage = (score * 100) / total;
  switch (parcentage) {
    case (parcentage >= 90):
      return "A";
    case (parcentage >= 80):
      return "B";
    case (parcentage >= 70):
      return "C";
    case (parcentage >= 60):
      return "D";
    default:
      return "F";
  }
}
// Function Invocation
grade(45, 100);



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function Decleration
function concatenate(str1, str2) {
  return str1 + str2;
}
// 2. Function Expression
let concatenate = function (str1, str2) {
  return str1 + str2;
}
// 3. Arrow Function Without Curly Braces 
let concatenate = (str1, str2) => str1 + str2;
//Arrow Function With Curly Braces 
let concatenate = (str1, str2) => {
  return str1 + str2;
}
// Function Invocation
concatenate(reettik, goswami);
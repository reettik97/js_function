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
let convertToString1 = function(n) {
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
function add_one(n)
{
  return n+1;
}
// 2. Function Expression
let add_one = function(n){
  return n+1; 
}
// 3. Arrow Function Without Curly Braces 
let add_one = n => n+1;
//Arrow Function With Curly Braces 
let add_one = n => {
  return n+1;
}
// Function Invocation
 add_one(5);




/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
 function sub_one(n){
   return n-1;
 }
 //  Function Expression
 let sub_one = function(n)
 {
  return n-1;
 } 
 // Arrow Function Without Curly Braces 
let sub_one = n => n-1;
//Arrow Function With Curly Braces 
let sub_one = n => {
   return n-1;
  }
  // Function Invocation
  sub_one(5);




/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
 function add(x , y){
   return x+y;
 }
 // 2. Function Expression
 let add = function(x , y)
 {
   return x + y ;
 }
 // 3. Arrow Function Without Curly Braces 
 let add = (x , y) => x+y;
 //Arrow Function With Curly Braces 
 let add = (x , y) => {
   return x+y;
  }
// Function Invocation
add(3 , 4);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function sub(x , y){
  return x-y;
}
// 2. Function Expression
let sub = function(x , y){
  return x - y;
}
// 3. Arrow Function Without Curly Braces 
let sub = (x , y) => x-y;
//Arrow Function With Curly Braces 
let sub = (x , y) => {
  return x-y;
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
function mul(x , y)
{
  return x*y;
}
// 2. Function Expression
let mul = function(x , y){
   return x*y;
}
// 3. Arrow Function Without Curly Braces 
let mul = (x , y) => x*y;
//Arrow Function With Curly Braces 
let mul = (x , y) => {
  return x*y;
}
// Function Invocation
mul(90 , 45);




/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration
function div(x , y)
{
   return x/y;
}
// 2. Function Expression
let div = function(x , y)
{
  return x / y;
}
// 3. Arrow Function Without Curly Braces 
let div = (x , y) => x / y;
//Arrow Function With Curly Braces 
let div = (x , y) => {
  return x / y;
}
// Function Invocation
div(60 , 10);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //Function Decleration
function squared(x)
{
    return x*x;
}
// 2. Function Expression
let squared = function(x)
{
  return x*x;
}
// 3. Arrow Function Without Curly Braces 
let squared = n => x*x;
//Arrow Function With Curly Braces 
let squared = n => {
  return x*x;
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
  function math_operation( str , x , y){
    switch(str)
    {
      case "add" : 
            console.log( x + " + " + y);
            return x+y;
      case "substract" : 
            console.log( x + " - " + y);
            return x-y;
      case "multiply" : 
            console.log( x + " * " + y);
            return x*y;
      case "divide" : 
            console.log( x + " / " + y);
            return x/y;
    }
  }
// 2. Function Expression
 let math_operation = function(str , x ,y)
 {
  switch(str)
  {
    case "add" : 
          console.log( x + " + " + y);
          return x+y;
    case "substract" : 
          console.log( x + " - " + y);
          return x-y;
    case "multiply" : 
          console.log( x + " * " + y);
          return x*y;
    case "divide" : 
          console.log( x + " / " + y);
          return x/y;
  }
 }  
 //Arrow Function With Curly Braces 
 let math_operation = (str , x , y) => {
  switch(str)
  {
    case "add" : 
          console.log( x + " + " + y);
          return x+y;
    case "substract" : 
          console.log( x + " - " + y);
          return x-y;
    case "multiply" : 
          console.log( x + " * " + y);
          return x*y;
    case "divide" : 
          console.log( x + " / " + y);
          return x/y;
  }
 }
// Function Invocation
math_operation("add" , 20 ,20);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

// 2. Function Expression
  function check_greater_than(a , b)
  {
    if(a>b)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  let check_greater_than = function(a , b){
    return (a>b)?true:false;
  }
  // 3. Arrow Function Without Curly Braces 
  let check_greater_than = (a , b) => (a>b)?true:false;
  //Arrow Function With Curly Braces 
  let check_greater_than = (a , b) => {
    return (a>b)?true:false;
  }
 // Function Invocation
 check_greater_than(3 , 8);




/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function Decleration
function check_less_than(a , b)
{
   return (a<b)? true : false;
}
// 2. Function Expression
let check_less_than = function(a , b)
{
  return (a>b)? false: true; 
}
// 3. Arrow Function Without Curly Braces 
let check_less_than = (a ,b) => (a>b)? false: true;
let check_less_than = (a ,b) => {
  return(a>b)? false: true;
}
// Function Invocation
check_less_than(23 ,41);




/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Decleration
function check_equal(a , b)
{
   return (a==b)?true : false;
}
// 2. Function Expression
let check_equal = function(a , b)
{
  return (a==b)?true : false;
}
// 3. Arrow Function Without Curly Braces 
let check_equal = (a, b) =>(a==b)?true:false;
//Arrow Function With Curly Braces 
let check_equal = (a, b) =>{
  return(a==b)?true:false;
}
// Function Invocation
check_equal(5 ,5);



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//Function Decleration
function smallest_value(x ,y)
{
   return (x<y)?x:y;
}
// 2. Function Expression
let smallest_value = function(x , y)
{
  return (x<y)?x:y;
}
// 3. Arrow Function Without Curly Braces 
let smallest_value = (x , y) =>(x<y)?x:y;
//Arrow Function With Curly Braces 
let smallest_value = (x , y) =>{
  return(x<y)?x:y;
}
// Function Invocation
smallest_value(8 , 9);



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Function Decleration
function largest_value(x ,y)
{
  return (x>y)?x:y;
}
// 2. Function Expression
let largest_value = function(x , y)
{
  return (x>y)?x:y;
}
// 3. Arrow Function Without Curly Braces 
let largest_value = (x , y) => (x>y)?x:y;
//Arrow Function With Curly Braces 
let largest_value = (x , y) => { 
  return(x>y)?x:y;
}
// Function Invocation
largest_value(8 , 5);



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Decleration
 function check_even(n)
 {
   return (n%2==0)?true:false;
 }
 // 2. Function Expression
let check_even = function(n)
{
  return (n%2==0)?true:false;
}
// 3. Arrow Function Without Curly Braces 
let check_even = n =>(n%2==0)?true:false;
//Arrow Function With Curly Braces 
let check_even = n =>
{
  return(n%2==0)?true:false;
}
// Function Invocation
check_even(8);



/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function Decleration
function check_odd(n)
 {
   return (n%2==0)?false:true;
 }
 // 2. Function Expression
 let check_odd = function(n)
 {
   return (n%2==0)?false:true;
 }
 // 3. Arrow Function Without Curly Braces 
let check_odd = n => (n%2==0)?false:true;
//Arrow Function With Curly Braces 
let check_odd = n =>{
  return(n%2==0)?false:true;
}
// Function Invocation
check_odd(9);




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
function grade( score , total)
{
   var parcentage = (score * 100)/total;
    switch(parcentage)
    {
      case (parcentage >= 90) :
            return "A";
      case (parcentage >= 80) :
            return "B";
      case (parcentage >= 70) :
            return "C";
      case (parcentage >= 60) :
            return "D";
      default:
            return "F";
    }
}
// 2. Function Expression
let grade = function( score ,total)
{
  var parcentage = (score * 100)/total;
  switch(parcentage)
  {
    case (parcentage >= 90) :
          return "A";
    case (parcentage >= 80) :
          return "B";
    case (parcentage >= 70) :
          return "C";
    case (parcentage >= 60) :
          return "D";
    default:
          return "F";
  }
}
//Arrow Function With Curly Braces 
let grade = (score, total) =>{
  var parcentage = (score * 100)/total;
  switch(parcentage)
  {
    case (parcentage >= 90) :
          return "A";
    case (parcentage >= 80) :
          return "B";
    case (parcentage >= 70) :
          return "C";
    case (parcentage >= 60) :
          return "D";
    default:
          return "F";
  }
}
// Function Invocation
grade(45 , 100);



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function Decleration
function concatenate(str1 , str2)
{
  return str1+str2;
}
// 2. Function Expression
let concatenate = function(str1 , str2)
{
  return str1+str2;
}
// 3. Arrow Function Without Curly Braces 
let concatenate = (str1 , str2) =>str1+str2;
//Arrow Function With Curly Braces 
let concatenate = (str1 , str2) =>{
  return str1+str2;
}
// Function Invocation
concatenate(reettik , goswami);
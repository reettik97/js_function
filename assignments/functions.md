1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
 let calculateDogAge = (puppy_age , rate) => {
        console.log("Your doggie is " + (puppy_age * rate) + "years old in dog years!");
 }


```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
let calculateSupply = (age , amount_per_day) =>{
   console.log("You will need "+ (age * 365 * amount_per_day) +" to last you until the ripe old age of X")
}
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
let celsiusToFahrenheit = n => {
          var f = (n*9)/5 + 32;
          console.log(  n + "°C is "+f+"°F");
}
let fahrenheitToCelsius = n => {
          var c = (n - 32) * (5 /9);
          console.log(  n + "°F is "+c+"°C");
}
let 
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
  let checkAge = (age)=>{
    return (age>18)?true : confirm("Did parents allow you?");
  }
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
   let checkAge = (age)=>{
   return (age>18 || confirm("Did parents allow you?"))?true : false;
  }
  ```
 Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
ans : There is no differents if We remove the else here .  
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here
// function pow( x  , n)
// {
//   return Math.pow(x , n);
// }
function power(x , n)
{ 
   if(n == 0){return 1;}
   else{
   return x * pow(x , n-1);
   } 
}

// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here


var num = Number(window.prompt("input the number"));
var math_operation = window.prompt("sum or product");

let sum = function(num)
{ 
  let sum=0;
  for(let i=1;i<=num;i++){
     sum+=i;
  }
  return sum;
}
let product = function(num)
{ 
  let pro=0;
  for(let i=1;i<=num;i++){
     pro+=i;
  }
  return pro;
}
if(math_operation==sum){
  alert(sum(num));
}
else{
  alert(product(num))
}
```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
var num = Number(window.prompt("input the number"));
let sum = function(num)
{ 
  let sum=0;
  for(let i=1;i<=num;i++){
     sum+=i;
  }
  alert(sum);
}
// your code goes here
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
 function sum_0f_mul_5_7(num)
 { 
   var sum=0;
   for(let i=1;i<=num;i++)
   {
     if(i%5==0 || i%3==0)
     {
       sum+=i;
     }
   }
   alert(sum);
   return sum;
 }

```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
let min = (x ,y) =>{
  return (x<y)?x:y;
} 

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```
// function declaration
function sum(a, b) {
  return a + b;
}

console.log(sum(1)); //=> NaN
console.log(sum(1, 2)); //=> 3
console.log(sum(1, 2, 3)); //=> 3

// function expression
const subtracting = function (a, b) {
  return a - b;
};

console.log(subtracting(2, 1)); //=> 1

// arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3)); //=> 6

// arrow function with implicit return
const divide = (a, b) => a / b;

console.log(divide(6, 2)); //=> 3

// default parameters
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(2)); //=> 4
console.log(power(2, 3)); //=> 8

// rest parameter
function sumAll(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(sumAll(1, 2)); //=> 3
console.log(sumAll(1, 2, 3)); //=> 6
console.log(sumAll(1, 2, 3, 4)); //=> 10
console.log(sumAll(1, 2, 3, 4, 5)); //=> 15

// callback function
function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(1, 2, (a, b) => a + b)); //=> 3
console.log(calc(2, 1, (a, b) => a - b)); //=> 1
console.log(calc(2, 3, (a, b) => a * b)); //=> 6
console.log(calc(6, 2, divide)); //=> 3

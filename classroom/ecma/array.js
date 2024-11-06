// mutable
const numbers = [0, 1, 2];

console.log(numbers);

numbers[3] = 3;
console.log(numbers);

numbers.push(4);
console.log(numbers); //=> [0, 1, 2, 3, 4]

numbers.unshift(-1);
console.log(numbers); //=> [-1, 0, 1, 2, 3, 4]

// multiple types
const person = ['Alice', 'alice@email.com', 20, false, ['LS', 'BD', 'ED']];

// destructuring arrays
// const name = person[0];
// const email = person[1];
const [name, email, , , subjects] = person;
console.log(subjects); //=> ['LS', 'BD', 'ED']

const [, , , , [firstSubject]] = person;
console.log(firstSubject); //=> 'LS'

// const state = useState('');
// const [name, setName] = useState('');

// spread operator
const id = 123;
const student = [id, ...person];
console.log(student); //=> [123, 'Alice', ...

console.log(Math.max(1, 100, 10)); //=> 100
console.log(Math.max(...numbers));

// loops
console.log(numbers);

for (const number of numbers) {
  console.log(number);
}

for (const index in numbers) {
  console.log(index, numbers[index]);
}

// sort

[1, 100, 20].sort(); //=> [1, 100, 20]

[1, 100, 20].sort((a, b) => a - b); //=> [1, 20, 100]

['alice', 'Bob', 'charlie'].sort(); //=> ['Bob', 'alice', 'charlie']

['alice', 'Bob', 'charlie'].sort((a, b) => a.localeCompare(b)); //=> ['alice', 'Bob', 'charlie']

// map, filter, reduce
const values = [1, 2, 3, 4, 5];

const doubled = values.map((value) => value * 2);
console.log(doubled); //=> [2, 4, 6, 8, 10]

const even = values.filter((value) => value % 2 === 0);
console.log(even); //=> [2, 4]

const gh10 = values.filter((value) => value > 10);
console.log(gh10); //=> []

const sum = values.reduce((acc, value) => acc + value);
console.log(sum); //=> 15

const product = values.reduce((acc, value) => acc * value, 1);
console.log(product); //=> 120

// forEach
values.forEach((value) => console.log(value));

// find, findIndex
const investments = [
  { symbol: 'AAPL', price: 100 },
  { symbol: 'GOOGL', price: 200 },
  { symbol: 'AMZN', price: 300 },
];

const google = investments.find((investment) => investment.symbol === 'GOOGL');
console.log(google); //=> { symbol: 'GOOGL', price: 200 }

const googleIndex = investments.findIndex(
  (investment) => investment.symbol === 'GOOGL'
);

investments.splice(googleIndex, 1);

console.log(investments); //=> [ { symbol: 'AAPL', price: 100 }, { symbol: 'AMZN', price: 300 } ]

// some, every => boolean
const someGreaterThan100 = investments.some(
  (investment) => investment.price > 100
);

const allGreaterThan100 = investments.every(
  (investment) => investment.price > 100
);

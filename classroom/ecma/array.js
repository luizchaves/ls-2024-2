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

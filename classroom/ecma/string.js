// String (', ", `)
// single quote
// double quote

// Template literals / Template strings

// Concat (+)
// <tr><td></td><td></td><td></td></tr>

// Template literals / Template strings
// multi-line strings
// string interpolation
const name = 'John';
const email = 'john@email.com';
const id = '1';

const row = `<tr>
  <td>${id}</td>
  <td>${name}</td>
  <td>${email}</td>
</tr>`;

console.log(row);
//=> "<tr><td>1</td><td>John</td><td>john@email.com</td></tr>"

// Array of characters
const investmentName = 'tesouro direto';

console.log(investmentName[0]); // t

console.log(investmentName.charAt(0)); // t

console.log(investmentName.split('').at(-1)); // o

console.log(investmentName[0].toUpperCase() + investmentName.substring(1)); // Tesouro direto

// Object String
// string primitive vs object String
console.log(typeof 'l'); // string
console.log(typeof String('l')); // string
console.log(typeof new String('l')); // object

console.log(String('l') instanceof String); // false
console.log(new String('l') instanceof String); // true

console.log(String('l') == new String('l')); // true
console.log(String('l') === new String('l')); // false
console.log('l' === new String('l')); // false

// Convert String(), .toString()
console.log((10).toString()); // '10'
console.log((10).toString()); // '10'
console.log(String(10)); // '10'
console.log(Number('10')); // 10

// String.length
console.log(investmentName.length); // 13

// String.padStart, String.padEnd
console.log(String(100).padStart(5)); // '  100'
console.log(String(1000000).padStart(5)); // '1000000'
console.log(String(100).padStart(5, '0')); // '00100'

// String.split / Array.join
investmentName.split(' '); // ['tesouro', 'direto']
investmentName.split(''); // ['t', 'e', 's', 'o', 'u', 'r', 'o', ' ', 'd', 'i', 'r', 'e', 't', 'o']
investmentName.split('').reverse().join(''); // 'oterid orueset'

// String.toLowerCase
console.log(investmentName.toLowerCase()); // tesouro direto
console.log(investmentName.toUpperCase()); // TESOURO DIRETO

// String.includes
console.log(investmentName.includes('tesouro')); // true
console.log('Tesouro direto'.includes('tesouro')); // false
console.log('Tesouro direto'.toLowerCase().includes('tesouro'.toLowerCase())); // true

// String.localeCompare
['alice', 'Bob', 'charlie'].sort(); // ['Bob', 'alice', 'charlie']
['alice', 'Bob', 'charlie'].sort((a, b) => a.localeCompare(b)); // ['alice', 'Bob', 'charlie']

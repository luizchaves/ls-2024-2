import { total, totalByCategory, percentByCategory } from './investments.js';

const investments = [
  {
    name: 'Tesouro Selic 2029',
    value: 15525,
    category: 'pós',
  },
  {
    name: 'CDB Banco X',
    value: 10000,
    category: 'pós',
  },
  {
    name: 'Tesouro IPCA 2029',
    value: 3249,
    category: 'ipca+',
  },
];

console.log(total(investments)); //=> 28774
console.log(totalByCategory(investments, 'pós')); //=> 25525
console.log(totalByCategory(investments, 'ipca+')); //=> 3249
console.log(percentByCategory(investments)); //=> { pós: 88.77, 'ipca+': 11.23 }

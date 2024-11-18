// Investment
// name: Tesouro Selic 2029
// value: 15500
// origin: Tesouro Nacional
// category: Pós
// date: 18/11/2024
// interest: 100% Selic

// JSON - JavaScript Object Notation
const investment = {
  name: 'Tesouro Selic 2029',
  value: 15500,
  origin: 'Tesouro Nacional',
  category: 'Pós',
  date: '18/11/2024',
  interest: '100% Selic',
};

console.log(investment);

// Class Definition
class Investment {
  constructor(name, value, origin, category, date, interest) {
    this.name = name;
    this.value = value;
    this.origin = origin;
    this.category = category;
    this.date = date;
    this.interest = interest;
  }
}

const tesouroSelic2029 = new Investment(
  'Tesouro Selic 2029',
  15500,
  'Tesouro Nacional',
  'Pós',
  '18/11/2024',
  '100% Selic'
);

console.log(tesouroSelic2029);

// Accessing properties
console.log(investment['name']);
console.log(investment.name);
console.log(tesouroSelic2029.name);

// console.table
console.table(investment);

console.table([investment, tesouroSelic2029]);

// private property (#)
class InvestmentPrivate {
  #name;
  #value;
  #origin;
  #category;
  #date;
  #interest;

  constructor(name, value, origin, category, date, interest) {
    this.#name = name;
    this.#value = value;
    this.#origin = origin;
    this.#category = category;
    this.#date = date;
    this.#interest = interest;
  }

  getName() {
    return this.#name;
  }

  getValue() {
    return this.#value;
  }

  getOrigin() {
    return this.#origin;
  }

  getCategory() {
    return this.#category;
  }

  getDate() {
    return this.#date;
  }

  getInterest() {
    return this.#interest;
  }
}

const tesouroSelic2029Private = new InvestmentPrivate(
  'Tesouro Selic 2029',
  15500,
  'Tesouro Nacional',
  'Pós',
  '18/11/2024',
  '100% Selic'
);

console.log(tesouroSelic2029Private.name); // undefined
// console.log(tesouroSelic2029Private.#name);
console.log(tesouroSelic2029Private.getName()); // Tesouro Selic 2029

// Property Shorthand
const name = 'Tesouro Selic 2029';
const value = 15500;
const origin = 'Tesouro Nacional';
const category = 'Pós';
const date = '18/11/2024';
const interest = '100% Selic';

// const tesouroSelic2029Shorthand = {
//   name: name,
//   value: value,
//   origin: origin,
//   category: category,
//   date: date,
//   interest: interest,
// };

const tesouroSelic2029Shorthand = {
  name,
  value,
  origin,
  category,
  date,
  interest,
};

// Spread properties
const tesouroSelic2029Spread = {
  ...tesouroSelic2029,
  broker: 'Banco X',
};

console.table(tesouroSelic2029Spread);

// Copy reference
console.table(tesouroSelic2029);

const tesouroSelic2029Copy = tesouroSelic2029;

tesouroSelic2029Copy.value = 31000;

console.log(tesouroSelic2029.value); // 31000

// Clone
const tesouroSelic2029Clone = { ...tesouroSelic2029 };

// Destructuring
// const { name, value } = tesouroSelic2029;
const { name: investmentName, value: investmentValue } = tesouroSelic2029;

// Dynamic Property {[key]: value}
const property = 'broker';
const broker = 'Banco X';

const tesouroSelic2029Dynamic = {
  ...tesouroSelic2029,
  // property: broker,
  [property]: broker,
};

// JSON.stringify
console.log(tesouroSelic2029);
console.log(JSON.stringify(tesouroSelic2029));
console.log(JSON.stringify(tesouroSelic2029, null, 2));

// JSON.parse
console.log(
  JSON.parse(
    '{"name":"Tesouro Selic 2029","value":31000,"origin":"Tesouro Nacional","category":"Pós","date":"18/11/2024","interest":"100% Selic"}'
  )
);

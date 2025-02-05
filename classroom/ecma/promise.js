function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, true)); // 2

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('a and b must be numbers');
    }

    resolve(a + b);
  });
}

// console.log(sumPromise(1, 2));
// const result = sumPromise(1, 2);
sumPromise(1, 2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
sumPromise(1, true)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// async/await
async function sumAsync(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a and b must be numbers');
  }

  return a + b;
}

sumAsync(1, 2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

try {
  const result = await sumAsync(1, 2);
  console.log(result);
} catch (error) {
  console.error(error);
}

// fetch
const cep = '01001000';
const api = `https://viacep.com.br/ws/${cep}/json/`;

try {
  const response = await fetch(api);
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
  console.log(data.localidade);
} catch (error) {
  console.error(error);
}

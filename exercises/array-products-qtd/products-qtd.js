export function gtZero(products) {
  // TODO
}

export function subTotal(products) {
  // TODO
}

export function total(products) {
  // let total = 0;

  // for (const [, price, quantity] of products) {
  //   total += price * quantity;
  // }

  // return total;
  return products.reduce(
    (acc, [, price, quantity]) => acc + price * quantity,
    0
  );
}

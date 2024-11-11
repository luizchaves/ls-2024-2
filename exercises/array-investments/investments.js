export function total(investments) {
  // let total = 0;

  // for (const investment of investments) {
  //   total += investment.value;
  // }

  // return total;

  return investments
    .map((investment) => investment.value)
    .reduce((acc, value) => acc + value, 0);
}

export function totalByCategory(investments, category) {
  return investments
    .filter((investment) => investment.category === category)
    .reduce((acc, { value }) => acc + value, 0);
}

export function percentByCategory(investments) {
  // const percentages = {};

  // const totalValue = total(investments);

  // const categories = investments.map((investment) => investment.category);

  // const uniqueCategories = new Set(categories);

  // uniqueCategories.forEach((category) => {
  //   const totalCategory = totalByCategory(investments, category);
  //   const percent = (totalCategory / totalValue) * 100;

  //   percentages[category] = percent;
  // });

  // return percentages;

  return investments.reduce((acc, investment) => {
    const percent = (investment.value / totalValue) * 100;

    return {
      ...acc,
      [investment.category]: percent,
    };
  }, {});
}

const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: ['E-Commerce', 'Cloud'],
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: ['Social'],
  },
  {
    name: 'Alphabet  Inc.',
    founded: 2015,
    industry: ['Search', 'Cloud', 'Advertising'],
  },
];

// kind => Internet company
companies.forEach((company) => (company.kind = 'Internet company'));

console.table(companies);

// show(companies)
function show(companies) {
  const MAX_COMPANY_NAME_LENGTH = companies.reduce(
    (max, company) => Math.max(max, company.name.length),
    0
  );

  return companies
    .map(
      (company) =>
        company.name.padEnd(MAX_COMPANY_NAME_LENGTH, '.') +
        '...' +
        company.founded
    )
    .join('\n');
}

// Amazon.........1994
// Alphabet Inc...2015
// Facebook.......2004
console.log(show(companies));

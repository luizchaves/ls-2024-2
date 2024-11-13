export function createList(length, text = 'Text') {
  // Array.from({ length }, (_, i) => i + 1) => [1, 2, 3, 4, 5]
  const items = Array.from({ length }, (_, i) => i + 1)
    .map((i) => `  <li>${text} ${i}</li>`)
    .join('\n');

  return `<ul>\n${items}\n</ul>`;
}

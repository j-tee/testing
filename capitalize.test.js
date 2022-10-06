const capitalize = require('./capitalize');

test('Capitalize string', () => {
  expect(capitalize('john')).toBe('John');
});

test('Type check', () => {
  expect(() => {
    capitalize(3);
  }).toThrow('Invalid Input');
});
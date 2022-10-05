
const stringLength = require('./stringLength.js');

test('returns the count of characters in a string', () => {
  expect(stringLength("boy")).toBe(3);
});

test('String should not be longer than 10 characters.', () => {
  expect(() => {
    stringLength('olamilekan ayinde');
  }).toThrow('string too long');
});

test('String should be at least 1 character long.', () => {
  expect(() => {
    stringLength('');
  }).toThrow('string cannot be null or empty');
});
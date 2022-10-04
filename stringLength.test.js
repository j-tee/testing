const sum = require('./stringLength');

test('returns the count of characters in a string', () => {
  expect(stringLength('boy')).toBe(3);
});
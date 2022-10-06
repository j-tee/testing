const reverseString = require('./reverseString.js');

test('returns a given string in the reverse order', () => {
    expect(reverseString('boy')).toBe('yob')
})
const {capitalize, reverseString, caesarCipher, analyzeArray} = require('./myModule');

//Test capitalize()
test('capitalize empty string', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize one character', () => {
  expect(capitalize('h')).toBe('H');
});

test('capitalize a word', () => {
  expect(capitalize('house')).toBe('House');
});

test('capialize a sentence', () => {
  expect(capitalize('this is my house.')).toBe('This is my house.');
});

//Test reverseString()
test('reverse empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverse one characer', () => {
  expect(reverseString('h')).toBe('h');
});

test('reverse a word', () => {
  expect(reverseString('ha')).toBe('ah');
});

test('reverse a sentence', () => {
  expect(reverseString('now is present')).toBe('tneserp si won');
});

//Test caesarCipher
test('reverse empty string', () => {
  expect(caesarCipher('', 1)).toBe('');
});

test('reverse string with shift 0', () => {
  expect(caesarCipher('a', 0)).toBe('a');
});

test('reverse word with shift 1', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('reverse lowercase string wrapping with shift 1', () => {
  expect(caesarCipher('abc xyz', 1)).toBe('bcd yza');
});

test('reverse uppercase string wrapping with shift 1', () => {
  expect(caesarCipher('ABC XYZ', 1)).toBe('BCD YZA');
})

test('reverse lowercase string with shift 5', () => {
  expect(caesarCipher('abc', 5)).toBe('fgh');
});

test('reverse uppercase string with shift 5', () => {
  expect(caesarCipher('ABC XYZ', 5)).toBe('FGH CDE');
}) 

test('reverse string with special character, shift 5', () => {
  expect(caesarCipher('ABC, XYZ!', 5)).toBe('FGH, CDE!');
})

//Test analyzeArray
test('analyzeArray with an empty array', () => {
  expect(analyzeArray([])).toMatchObject({
    average: null,
    min: null,
    max: null,
    length: null
  });
});

test('analyzeArray with an array of length 1', () => {
  expect(analyzeArray([1])).toMatchObject({
    average: 1,
    min: 1,
    max: 1,
    length: 1
  });
});

test('analyzeArray with an array of length 3', () => {
  expect(analyzeArray([3,1,2])).toMatchObject({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  });
});

test('analyzeArray with an array of big numbers', () => {
  expect(analyzeArray([200,1,75,1000,1234,56,888])).toMatchObject({
    average: 493,
    min: 1,
    max: 1234,
    length: 7
  });
});

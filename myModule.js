const a_ASCII = 'a'.charCodeAt(0);
const z_ASCII = 'z'.charCodeAt(0);
const A_ASCII = 'A'.charCodeAt(0);
const Z_ASCII = 'Z'.charCodeAt(0);

//A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
  if (str.length == 0) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

//A reverseString function that takes a string and returns it reversed.
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
function caesarCipher(str, shift) {
  let result = "";

  if (shift == 0) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-zA-Z]/)) {
      result += str[i];
    }
    else {
      let ascii = str[i].charCodeAt(0) + shift;

      if (str[i] == str[i].toLowerCase()) {
        if (ascii > z_ASCII) {
          let remainder = ascii % z_ASCII;
          result += String.fromCharCode(a_ASCII + remainder - 1);
        } 
        else {
          result += String.fromCharCode(ascii);
        }
      }
      else {
        if (ascii > Z_ASCII) {
          let remainder = ascii % Z_ASCII;
          result += String.fromCharCode(A_ASCII + remainder - 1);
        } 
        else {
          result += String.fromCharCode(ascii);
        }
      }
    }
  }

  return result;
}

//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
function avgArr(arr) {
  let sum = arr.reduce(
    (accumulator, item) => accumulator + item
  )

  return Math.floor(sum / arr.length);
}

function minArr(arr) {
  let res = arr.reduce(
    (minVal, item) => Math.min(minVal, item)
  );

  return res;
}

function maxArr(arr) {
  let res = arr.reduce(
    (maxVal, item) => Math.max(maxVal, item)
  );

  return res;
}

function analyzeArray(arr) {
  let result = {
    average: null,
    min: null,
    max: null,
    length: null
  }

  if (arr.length != 0) {
    result = {
      average: avgArr(arr),
      min: minArr(arr),
      max: maxArr(arr),
      length: arr.length
    }
  }

  return result;
}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray
}
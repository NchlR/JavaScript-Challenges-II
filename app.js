// Falsy or Truthy
// Given two values, return the first one if it is falsy, otherwise
// return the second one.

// NOTES:
// How to tell if a value is Truthy or Falsy -
// EX: Adding an (!) in front of a 0 on the console will convert
// it to its opposite boolean value.
// Adding (!!) in front of an element will reveal its boolean value.

function falsyOrTruthy(elem1, elem2) {
  // ternary operator
  return !elem1 ? elem1 : elem2;

  // if (!elem1) {
  // if the opposite of falsy is true, then return it
  // return elem1;
  // }
  // else {
  // return elem2;
  // }
}

console.log(falsyOrTruthy(10, 5));

// ===========================================================

// Return the length of any given array

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

// ===========================================================

// Get the last element in the array

// NOTES:
// First element in the array begins at index 1
// To find the last element you must find the total number
// of elements and - 1

function arrLength(arr) {
  return arr[arr.length - 1];
}

console.log(arrLength([0, 1, 2, 3]));

// ===========================================================

// Find the sum of an array
// Use a for-loop
// This is how you loop through every element in an array
//   for (let i = 0; i < arr.length; ++i) {
//   console.log(arr[i])
// }

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));

// ===========================================================

// Add up the numbers from a single number
function progressiveSum(num) {
  let sum = 0;

  // This for-loop starts at 0 and stops at < the given #
  // for (let i = 0; i < num; ++i)
  // the for-loop must be changed to
  // so that it starts from 1 and stops at <= the # given

  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));

// ===========================================================

// Calculate the time
function calcTime(seconds) {
  // Math.floor rounds the number down

  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  // Converts the variable to a string if
  // length === 1 and executes the if statement

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(500));

// ===========================================================

function getMax(arr) {
  let max = arr[0];
  // let the max value (let max)
  // start at the beginning of the array (arr[0])
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      // if arr[i] is greater than the current max value
      max = arr[i];
      // then let arr[i] become the new max value
    }
  }
  return max;
}

console.log(getMax([1, 3, 5]));

// ===========================================================

function reverseString(str) {
  // INCREMENTING FOR-LOOP
  let reversedString = "";
  for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;

  // DECREMENTING FOR-LOOP
  // for (let i = str.length - 1; i >= 0; --i) {
  // reversedString += str[i]
  // }
  // return reversedString;

  // ARRAY REVERSE PROPERTY (only arrays do) but you
  // need to start by converting a string into an array
  // by using the .split('') property with an empty string

  // 'abc'.split('').reverse().join('')
  // turns a string into an array | reverses the array |
  // convert array back into a string

  // function reverseString(str) {
  //  return str.split('').reverse().join('');
  // }
}

console.log(reverseString("abc"));

// ===========================================================

// Turn every element in an array into 0
function convertToZeros(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = 0;
  }
  return arr;

  // OR Array 'fill'
  // return new Array(arr.length).fill(0);
  // }

  // OR Array 'map'
  // (allows you to map over every element in an array)
  // EX: [1, 2, 3].map(elem => elem * 2)
  // = [2, 4, 6]
  // TRANSLATION: convert the current element => element * 2

  // FOR THIS EX: return arr.map(elem => 0);
  // NOTE: (elem => [there is an invisible 'return' here] 0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

// ===========================================================

// Filter out all the apples
// Using For-loop
function removeApples(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'Apple') {
        // if the current element is not  'Apple'
        // === 'is' | !== 'is not'
        // do not diplay it
      console.log(arr[i])
    }
  }
  return arr 
}

// Using 'Array Filter'

// return arr.filter(elem => elem !== 'Apple')
// The 'filter' is similar to 'map'

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

// ===========================================================


// Filter out all the falsy values

function filterOutFalsy(arr) {
  // For-loop
  let truthyArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      console.log(arr[i])
    }
  }
  return arr
}

// Filter
//  return arr.filter(elem => !!elem === true)
// Take the current element and convert it into a boolean value
// If the element evaluates to 'true', then 
// include the element in the filtered array

console.log(filterOutFalsy(['', NaN, 500, null, false, 0]))

// ===========================================================

// Truthy to true, Falsy to false
function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))








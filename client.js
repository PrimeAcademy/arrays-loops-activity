// DOM unordered list element
const hobbyListDOM = document.querySelector("#hobby-list");

/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

let groupMemberHobbies = ["ping pong", "biking", "guitar", "swimming"];
for (let hobby of groupMemberHobbies) {
  console.log(hobby);
  hobbyListDOM.innerHTML += `<li>${hobby}</li>`;
}
console.log("Number of hobbies:", groupMemberHobbies.length);

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

let colors = ["red", "blue", "yellow", "teal"];
let tealCount = 0;
for (let colorString of colors) {
  if (colorString === "teal") {
    tealCount += 1;
  }
}
console.log("colors array:", colors);
console.log("tealCount:", tealCount);

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbers = [13, 7, 2, 54, 23, -1, 0, -2];
let oddNumbers = [];
let evenNumbers = [];
for (let number of numbers) {
  if (number % 2 === 0 || number % 2 === -0) {
    evenNumbers.push(number);
  } else if (number % 2 === 1 || number % 2 === -1) {
    oddNumbers.push(number);
  }
}
console.log("Numbers array:", numbers);
console.log("Odd numbers array:", oddNumbers);
console.log("Even numbers array:", evenNumbers);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

// Example output
// true, false, true, true
// Toggled false, true, false, false

let booleans = [true, false, false, true, false];
let toggled = [];
for (let boolean of booleans) {
  toggled.push(!boolean);
}
console.log("Original array:", booleans);
console.log("Toggled array:", toggled);

/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let numArray = [13, 12, 0, 24, 3, 0, 0, 0];
for (let i = numArray.length - 1; i >= 0; i -= 1) {
  if (numArray[i] === 0 && i === numArray.length - 1) {
    numArray.pop();
  }
}
console.log("Number array without zero at the end:", numArray);

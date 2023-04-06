/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

let hobbies = ['playing video games', 'watching sports','traveling', 'listneing to music', 'working out'];
for ( let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

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
let colors = ['red', 'blue', 'green', 'teal', 'yellow', 'teal', 'teal'];
let tealCount = 0;

for (let color of colors) {
    console.log(color);
    if (color === 'teal') {
        tealCount += 1;
    }
}
console.log("Teal was found", tealCount, "times");

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


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

let numbers = [5,20,16,2,8]; 
let oddNumbers = [];
let evenNumbers = [];
for (let number of numbers){
    if (number %2) {
        oddNumbers.push(number);
    } else {
        evenNumbers.push(number);
    }
}
console.log('all numbers', numbers);
console.log('odd numbers', oddNumbers);
console.log('even numbers', evenNumbers);


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
let cars = [true, false, false, true];
let trucks = [];
for (let car of cars){
    trucks.push(!car);
}
console.log('initial array', cars);
console.log('toggled array', trucks);

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
let numerals = [5, 8, 0, 0, 3, 0, 6, 2, 0, 0, 0];

while (numerals[numerals.length-1] === 0) {
    numerals.pop();
}
console.log('output of array', numerals);

/**
* 1. Create a largish array full of numbers, including at least two different
* numbers that repeat (Example: [0, 2, 1, 2, 4, 1])
* 2. Find the "greatest position distance" between repeating numbers in your
* array.
*
* Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest position
* distance is between the matching '1' values at index 2 and 5. Executing
* greatestDistance against this array would return 3. (i.e. 5 - 2)
**/

let someNumbers = [0,5,4,3,2,1,2,3,4,5];
let maxDistance = 0; 
for (let i=0; i < someNumbers.length; i += 1) {
    let number = someNumbers[i];
    let distance = i - someNumbers.indexOf (number);
    console.log(`number ${number}, ${distance}`);
    if (distance > maxDistance){
        maxDistance = distance;
    }
}
console.log('max distance', maxDistance);
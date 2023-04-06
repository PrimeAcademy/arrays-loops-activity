/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = ['surfing', 'biking', 'gaming', 'swimming'];
for (let i = 0; i < hobbies.length; i++) {
    let hobby = hobbies[i];
    console.log(hobby);
}

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
let colors = [ 'teal', 'orange', 'green', 'black'];
let tealCount = 0; 
for(let color of colors) {
    if( color === 'teal') {
    tealCount ++
    }
}
console.log(tealCount);

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
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = [];
let evenNumbers = [];
for (let number of numbers) {
    if ((number + 2) % 2 === 1) {
        oddNumbers.push(number);
    } else {
        evenNumbers.push(number);
    }
}
console.log(numbers);
console.log(oddNumbers);
console.log(evenNumbers);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let values = [true, false, false, true];
let toggle = [];

for (let value of values) {
    if (value) {
        toggle.push(false);
    } else {
        toggle.push(true);
    }
}
console.log(toggle);

// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */

let numbers2 = [3, 0, 2, 8, 0, 0, 0] 
numbers2.reverse()
for (let number of numbers2) {
    if (number === 0) {
        numbers2.shift();
    }
}
numbers2.reverse()
console.log(numbers2);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


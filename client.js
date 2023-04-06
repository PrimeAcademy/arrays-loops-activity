/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let groupMemberHobbies = ['crochet', 'gym', 'reading', 'disc golf'];
for (let hobbies of groupMemberHobbies) {
    console.log(hobbies);
}
console.log('Total hobbies:', groupMemberHobbies.length);

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
// let sum = 0;
let colors = ['red', 'orange', 'yellow', 'green','teal', 'teal', 'teal'];
let tealCount = 0;
for (let item of colors){
    if(item === 'teal'){
        tealCount += 1;
    }
}
console.log(tealCount)

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

const numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = [];
let evenNumbers = [];
for (let num of numbers) {
    if (num % 2 === 0) {
       evenNumbers.push(num)
        } else {(num % 2 === 1) 
           oddNumbers.push(num) 
        }
       
    } 
    console.log(numbers);
    console.log('Odd Numbers', oddNumbers);
    console.log('Even Numbers', evenNumbers);



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
let booleanArray = [true, false, true, false, false];
let toggled = [];


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


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

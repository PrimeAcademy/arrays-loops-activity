/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

let hobbies = ['Darts', 'Gaming', 'collecting', 'retro video games'];
console.log('our hobbies are: ', hobbies );
console.log('total hobbies: ', hobbies.length);



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
let colors = ['teal', 'green', 'red', 'blue', 'teal'];
let tealCount = 0;
for (let color of colors) {
    //logic to determine tealcount
    if (color=='teal') {
        tealCount++
    }
}
console.log('the colors are', colors, 'teal was found: ' ,tealCount);


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

let numbers = [3, 7, 2, 8, 11, 4, 2];
let oddNumbers = [];
let evenNumbers = [];

for (let number of numbers) { //going over the entire numbers array, each item is called "odd"
    if (number % 2==0){
        // is an even number
        evenNumbers.push(number)
    }
    else {
        oddNumbers.push(number)
    }
}

console.log('number: ', numbers ,'odd numbers:' , oddNumbers ,'even numbers:' ,evenNumbers)

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


// Example output
// true, false, true, true
// Toggled false, true, false, false
let booleans = [true, false, true, true]
let toggledArray = []

for (let boolean of booleans ){
    if (boolean != true){
        toggledArray.push(true)
    }
    else if(boolean != false){
        toggledArray.push(false)
    }
}

console.log( booleans, toggledArray)



/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */

let otherNumbers = [3, 0, 2, 8, 0, 0, 0]

for (let otherNumber of otherNumbers) {
    if (otherNumber > 0){
        otherNumbers.pop()
    }
}
console.log(otherNumbers)


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
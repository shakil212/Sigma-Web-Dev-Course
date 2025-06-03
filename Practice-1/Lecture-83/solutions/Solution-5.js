// 5. The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumUntilNegative(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             break; // Stop summing if a negative number is found
//         }
//         sum += arr[i];
//     }

//     return sum;
// }

// -----------------------------------------------------------------------------
// using while loop
function sumUntilNegative(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length && arr[i] >= 0) {
        sum += arr[i];
        i++;
    }

    return sum;
}


console.log(sumUntilNegative([2, 4, 6, -1, 3]));   // Output: 12 (2 + 4 + 6)
console.log(sumUntilNegative([10, 5, 0, 7]));      // Output: 22 (no negative number)
console.log(sumUntilNegative([-3, 1, 2]));         // Output: 0 (starts with a negative)
console.log(sumUntilNegative([]));                // Output: 0 (empty array)

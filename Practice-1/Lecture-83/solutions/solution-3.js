// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original.Write a function that appends the reversed version of the original string to itself.


function mirrorMirror(str) {
    const reversed = str.split('').reverse().join('');
    return str + reversed;
}

// Example usage:
console.log(mirrorMirror("magic")); // Output: "magiccigam"
console.log(mirrorMirror("wizard")); // Output: "wizarddraziw"




// Explanation:
// str.split('') splits the string into an array of characters.

// .reverse() reverses the array.

// .join('') joins the reversed characters back into a string.

// Finally, the original string is concatenated with its reversed version.

// ---------------------------------------------------------------------------
// Another way to solve this problem 
// // Manually splits a string into an array of characters
// function manualSplit(str) {
//     const charArray = [];
//     for (let i = 0; i < str.length; i++) {
//         charArray.push(str[i]);
//     }
//     return charArray;
// }

// // Manually reverses an array
// function manualReverse(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// // Manually joins an array into a string
// function manualJoin(arr) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }

// // Final mirror function using manual methods
// function mirrorMirror(str) {
//     const splitStr = manualSplit(str);
//     const reversedStr = manualReverse(splitStr);
//     const mirrored = manualJoin(reversedStr);
//     return str + mirrored;
// }

// // Example usage:
// console.log(mirrorMirror("magic"));   // Output: "magiccigam"
// console.log(mirrorMirror("mirror"));  // Output: "mirrorrorrim"

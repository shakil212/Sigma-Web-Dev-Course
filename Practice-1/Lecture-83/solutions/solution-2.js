// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            // If current element is the same as the previous, keep it unchanged
            result.push(arr[i]);
        } else {
            // Otherwise, double it
            result.push(arr[i] * 2);
        }
    }

    return result;
}

console.log(doubleTrouble([1, 1, 2, 3, 3, 3, 4]));
// Output: [2, 1, 4, 6, 3, 3, 8]

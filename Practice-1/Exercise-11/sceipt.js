let a = 6;

// function factorial(number) {
//     let arr = Array.from(Array(number + 1).keys());// creates an array of numbers from 0 to number
//     console.log(arr.slice(1,));
//     let result = arr.slice(1,).reduce((accumulator, currentValue) => { // removes the first element (0) from the array
//         // and multiplies the rest of the elements
//         // accumulator is the previous value, currentValue is the current value
//         return accumulator * currentValue;
//     });
//     console.log(result);
// }
// factorial(a);



function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac *= index;
    }
    return fac;
}
facFor(a);
console.log(facFor(a));
let arr=[1,34,55,66,77,7]

let newarr=arr.map((element, index, array) =>{
return element**2;
})
console.log(newarr);

// const greatherthanseven=(element)=>{
//     if(element>7){
//         return true;
//     }
//     return false;
// }

// console.log(newarr.filter(greatherthanseven));
// console.log(arr.filter(greatherthanseven));

// console.log(arr.filter( greatherthanseven=(element)=>{ // we can also write the function in this way
//     // if we want to use the function in a single line we can write it like this
//     if(element>7){
//         return true;
//     }
//     return false;
// }));

console.log(arr.filter( (element)=>{ // we can also write the function in this way
    // if we want to use the function in a single line we can write it like this
    if(element>7){
        return true;
    }
    return false;
}));
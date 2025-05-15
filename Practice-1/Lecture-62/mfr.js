prompt("Enter your name");
alert("It's Dangerous to go alone! Take this.");
confirm("Are you sure you want to delete this?");

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


let arr2=[1,2,3,4,5,6]

const blue=(a,b)=> {
    return a+b;
}
console.log(arr2.reduce(blue)); // this will give the sum of all the elements in the array

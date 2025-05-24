console.log("Hey this is Exercise 12");

// let boxes = document.getElementsByClassName("box"); // This will return an HTMLCollection

let boxes = document.querySelector(".container").children;
// console.log(boxes);

function getrandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach(e =>{
    // console.log(box);
    e.style.backgroundColor = getrandomColor();
    e.style.color =getrandomColor();
})
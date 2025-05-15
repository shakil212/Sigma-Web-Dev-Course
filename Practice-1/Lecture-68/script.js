console.log("kire vai kmn achen");

// let boxes = document.getElementsByClassName("box"); // HTMLCollection
// console.log(boxes); 

// boxes[2].style.backgroundColor="yellow"; // change color of 3rd box

// document.getElementById("pink").style.backgroundColor="pink" //change color of id="pink" box

// document.querySelector(".box").style.backgroundColor="red"; // change color of first box
// querySelector selects the first element that matches the selector


// querySelectorAll selects all elements that match the selector
// let allBoxes = document.querySelectorAll(".box"); // NodeList
// console.log(allBoxes); // NodeList
// allBoxes[0].style.backgroundColor="red"; // change color of first box            

// console.log(document.querySelectorAll(".box")); // NodeList

document.querySelectorAll(".box").forEach((box)=>{
    console.log(box);
    box.style.backgroundColor= "hotpink"; // change color of all boxes
    // box.style.width="100px"; // change width of all boxes
    // box.style.height="100px"; // change height of all boxes
    // box.style.border="5px solid blue"; // change border of all boxes
    box.style.borderRadius="500px"; // change border radius of all boxes
})


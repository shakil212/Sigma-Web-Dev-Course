// function to change color of all boxes
function getrandomColor() {
    // function to generate random color
    // Math.random() generates a random number between 0 and 1
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

setInterval(() => {
    document.querySelectorAll(".box").forEach((box) => {
        box.style.backgroundColor = getrandomColor();
        box.style.borderRadius = "500px"; // change border radius of all boxes

    });
}, 1000);

setInterval(() => {
    document.querySelectorAll(".container").forEach((box) => {
        box.style.backgroundColor = getrandomColor();
    });
}, 2000);
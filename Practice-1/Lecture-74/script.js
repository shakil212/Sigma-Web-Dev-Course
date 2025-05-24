console.log("Kire vaai fajlamu koris na ");

let button = document.getElementById("btn");
button.addEventListener("click", ( ) => {
    // alert("Button clicked");

    document.querySelector(".box").innerHTML ="<b> Hala Kamda korlo ki</b>";

})

document.addEventListener("keydown", (event) => {
        console.log(event.key, event.keyCode);
})
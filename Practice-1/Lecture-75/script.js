console.log("Shakil Vai kemon achen?");// This is a synchronous function
console.log("Sneha kemon acheo?");// This is a synchronous function


setTimeout(() => { // This is an asynchronous function
    console.log("Sneha, Ami tomake bhalo bhabe bujhte parchi na.");
}, 2000);


setTimeout(() => { // This is an asynchronous function
    console.log("Sneha, Tumi ki amake Valobasho.");
}, 5000);
console.log("Snhea, Ami tomake Valobashi.");// This is a synchronous function

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Shakil");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
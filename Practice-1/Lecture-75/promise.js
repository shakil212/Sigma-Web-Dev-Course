console.log("hae vhai ami promise");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ranadom  number was not suppoting you");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Shakil")
        }, 1000);

    }
})

let prom2 = new Promise((resolve, reject) => { 
    let a = Math.random();
    if (a < 0.5) {
        reject("No ranadom  number was not suppoting you 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Shakil 2")
        }, 1000);

    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

//
// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err) =>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err) =>{
//     console.log(err);
// })

let p3 = Promise.race([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})
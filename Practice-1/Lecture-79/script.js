let a = prompt("Enter first Number: ")

let b = prompt("Enter Second Number: ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry your input is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main() {

    let x = 2
    try {
        console.log("The sum is: ", sum)
        console.log("The result is sum*x: ", sum * x)
        return true

    } catch (error) {
        console.log("kire vai tui to x variable define e koris nai")
        return false
    }

    // console.log("The Programs are being closed because the server is down")

    finally{
        console.log("The Programs are being closed because the server is down")
    }
}

let c = main()
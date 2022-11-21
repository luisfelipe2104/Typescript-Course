// npm i lite-server --save-dev
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    const result = n1 + n2
    if (showResult) console.log(phrase + result)
    else return result
}

// let number: number   // tells it will store a number value
// number = 5

// let number1: number = 5 
const number1 = 5
const number2 = 2.8
const printResult = true
let resultPhrase = 'Result is: ' // initializes as a string
// resultPhrase = 0 // typescript don't allow us to change the type of a variable

add(number1, number2, printResult, resultPhrase)
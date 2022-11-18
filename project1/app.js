// npm i lite-server --save-dev
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    var result = n1 + n2;
    if (showResult)
        console.log(phrase + result);
    else
        return n1 + n2;
}
// let number: number   // tells it will store a number value
// number = 5
// let number1: number = 5 
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: '; // initializes as a string
// resultPhrase = 0 // typescript don't allow us to change the type of a variable
add(number1, number2, printResult, resultPhrase);

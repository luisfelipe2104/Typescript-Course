// type Aliases
type Combinable = number | string   // creates a type
type ConversionDescriptor = 'as-number' | 'as-text' // creates a type

// ---------------------------------
function combine(
    input1: Combinable,
    input2: number | string,   // -> union types 
    resultConversion: ConversionDescriptor  // 'as-number' | 'as-text' -> literal type 
) {
    let result: string | number
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } 
    else result = input1.toString() + input2.toString()
    return result
}

// -------------------------------------
// combines the numbers
const combinedAges = combine(17, 10, 'as-number')
console.log(combinedAges)

// forces the string-number to convert and combine them
const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

// combines the strings
const combinedNames = combine('Luis', ' Felipe', 'as-text')
console.log(combinedNames)
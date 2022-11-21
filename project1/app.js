// ---------------------------------
function combine(input1, input2, // -> union types 
resultConversion // 'as-number' | 'as-text' -> literal type 
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else
        result = input1.toString() + input2.toString();
    return result;
}
// -------------------------------------
// combines the numbers
var combinedAges = combine(17, 10, 'as-number');
console.log(combinedAges);
// forces the string-number to convert and combine them
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
// combines the strings
var combinedNames = combine('Luis', ' Felipe', 'as-text');
console.log(combinedNames);

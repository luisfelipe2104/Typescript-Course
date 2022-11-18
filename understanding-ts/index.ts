const button = document.getElementById("clickButton")! as HTMLButtonElement
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement // sets a type to the variable equal to the corresponding html element

// adds type to the params
function add(num1: number, num2: number) {
    return num1 + num2
}

button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value))  // + converts the variable to number
})

"use strict";

const input = document.querySelector("input");
const buttons = document.getElementsByName("math_button");
const clearButton = document.getElementById("clear_button");
const equalButton = document.getElementById("equal_button");

for (let item of buttons) {
    item.addEventListener("click", () => {
        input.value += item.value;
    })
}

clearButton.addEventListener("click", () => {
    input.value = "";
})


equalButton.addEventListener("click", () => {
    try {
        input.value = eval(input.value);
    } catch {
        const inputArray = input.value.split("");
        inputArray.pop();
        input.value = eval(inputArray.join(""));
    }
})

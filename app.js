const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculateArr = [];

function calculate(button) {
    const val = button.textContent;

    if (button.id === "clear") {
        screenDisplay.innerText = "0";
        calculateArr = []; // Clear input
        return;
    }

    if (button.id === "equals") {
        try {
            const result = eval(calculateArr.join(''));
            screenDisplay.textContent = result;
            calculateArr = [result.toString()]; // allow continued calculation
        } catch (e) {
            screenDisplay.textContent = "Error";
            calculateArr = [];
        }
        return;
    }

    // Default: Add value to array and display it
    calculateArr.push(val);
    screenDisplay.innerText = calculateArr.join('');
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
        calculate(button);
    });
});

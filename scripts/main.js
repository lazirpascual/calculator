// functions
const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

const operate = (numOne, numTwo, operator) => {
    return  (operator == '+') ? add(numOne, numTwo)
        :   (operator == '-') ? subtract(numOne, numTwo)
        :   (operator == '*') ? multiply(numOne, numTwo)
        :   divide(numOne, numTwo);
}

const displayScreen = document.querySelector('#display');
const mainButtons = document.querySelectorAll('button');

// loop through each button
mainButtons.forEach((button) => {

    // display corresponding number for each click 
    button.addEventListener('click', () => {
        const result = document.createElement('h1');
        displayScreen.textContent = "";     // clear the text
        result.textContent = button.id;     // add id to the display
        displayScreen.appendChild(result);
    });
});
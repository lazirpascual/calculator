// functions
const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;
const operate = (numOne, numTwo, operator) => {
    return  (operator == "+") ? add(numOne, numTwo)
        :   (operator == "-") ? subtract(numOne, numTwo)
        :   (operator == "*") ? multiply(numOne, numTwo)
        :   divide(numOne, numTwo);
}
const roundToTwo = (num) => +(Math.round(num + "e+3")  + "e-3");

const displayScreen = document.querySelector('#display');
const mainButtons = document.querySelectorAll('button');
let numbers = {
    first: "",
    second: "",
    operator: "",
    equals: "",
    result: "",
    secondResult: ""
};

// loop through each button
mainButtons.forEach((button) => {

    // display corresponding number for each click 
    button.addEventListener('click', () => {
        const result = document.createElement('h1');
        
        // check if current button are operators
        if (button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
            // only set the operator if it is empty
            if (numbers.operator == "") {
                numbers.operator = button.id;
            }
        } 

        // all values filled, only need to calculate
        if (numbers.first != "" && numbers.second != "" && numbers.operator != "")
        {
            // if the current button is an operator or an equal sign, calculate result
            if (button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/" || button.id == "=") {
                numbers.equals = true;
            } 
        }

        // all situations that can occur when each button is pressed
        displayScreen.textContent = "";     
        if (numbers.first == "" && numbers.second == "" && numbers.operator == "" && numbers.equals == "") {
            numbers.first =  button.id;
            result.textContent = button.id;     
            displayScreen.appendChild(result);
        } else if (numbers.first != "" && numbers.second == "" && numbers.operator == "" && numbers.equals == "") {
            numbers.first = numbers.first + button.id;
            result.textContent = numbers.first;     
            displayScreen.appendChild(result);
        } else if (numbers.first != "" && numbers.second == "" && numbers.operator != "" && numbers.equals == "") {
            numbers.second =  "0";
            result.textContent = numbers.first;     
            displayScreen.appendChild(result);
        } else if (numbers.first != "" && numbers.second != "" && numbers.operator != "" && numbers.equals == "") {
            numbers.second = parseInt(numbers.second) + button.id;
            result.textContent = numbers.second;     
            displayScreen.appendChild(result);
        } else if (numbers.first != "" && numbers.second != "" && numbers.operator != "" && numbers.equals != "") {
            numbers.result = operate(Number(numbers.first), Number(numbers.second), numbers.operator);
            result.textContent = roundToTwo(numbers.result);     
            displayScreen.appendChild(result);
            numbers.first =  "";
            numbers.second = "";
            numbers.operator = "";
            numbers.equals = "";
        } 

        // when "clear" button is pressed, empty everything and display 0
        if (button.id == "clear") {
            numbers.first =  "";
            numbers.second = "";
            numbers.operator = "";
            numbers.equals = "";
            result.textContent = "0";
            displayScreen.appendChild(result);
        }
    });
});
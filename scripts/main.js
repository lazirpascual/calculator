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

const displayScreen = document.querySelector('#display');
const mainButtons = document.querySelectorAll('button');
let numbers = {
    first: "",
    second: "",
    operator: "",
    equals: "",
    result: ""
};

// loop through each button
mainButtons.forEach((button) => {

    // display corresponding number for each click 
    button.addEventListener('click', () => {
        const result = document.createElement('h1');
        if (button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
            numbers.operator = button.id;
        } else if (button.id =="=") {
            numbers.equals = button.id;
        }

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
            result.textContent = button.id;     
            displayScreen.appendChild(result);
        } else if (numbers.first != "" && numbers.second != "" && numbers.operator != "" && numbers.equals == "") {
            numbers.second = numbers.second + button.id;
            result.textContent = numbers.second;     
            displayScreen.appendChild(result);
        }
        else if (numbers.first != "" && numbers.second != "" && numbers.operator != "" && numbers.equals != "") {
            numbers.result = operate(Number(numbers.first), Number(numbers.second), numbers.operator);
            result.textContent = numbers.result;     
            displayScreen.appendChild(result);
            numbers.first =  "";
            numbers.second = "";
            numbers.operator = "";
            numbers.equals = "";
        }

    });
});
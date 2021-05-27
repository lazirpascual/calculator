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
// Get all the html elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let multiplyButton = document.querySelector('#multiply-button');
let divideButton = document.querySelector('#divide-button');
let clearButton = document.querySelector('#clear-button');

// click on minus button
minusButton.addEventListener('click',function() {
    operatorButton.innerText = minusButton.innerText;
    calculate();
});

// click on plus button
plusButton.addEventListener('click',function() {
    operatorButton.innerText = plusButton.innerText;
    calculate();
});

// click on divide button
divideButton.addEventListener('click',function() {
    operatorButton.innerText = divideButton.innerText;
    calculate();
});

// click on multiply button
multiplyButton.addEventListener('click',function() {
    operatorButton.innerText = multiplyButton.innerText;
    calculate();
});

// click on equals button
equalsButton.addEventListener('click',function() {
   calculate();
});

// calculate
let calculate = function() {
    let firstNumber =  firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.innerText.trim();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number.parseFloat(firstNumber);
        let num2 = Number.parseFloat(secondNumber);
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        resultButton.innerText = result;
    }
};

// click on Clear
clearButton.addEventListener('click',function() {
   firstNumberElement.value = '';
   secondNumberElement.value = '';
   operatorButton.innerText = '+';
   resultButton.innerText = 'RESULT';
});
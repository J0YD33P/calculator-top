let firstOperand = '';
let secondOperand = '';
let operator = '';
let displayValue = 0;

function add(){
    let addition = Number(firstOperand) + Number(secondOperand);
    return addition;
}

function subtract(){
    let subtraction = Number(firstOperand) - Number(secondOperand);
    return subtraction;
}

function multiply(){
    let multiplication = Number(firstOperand) * Number(secondOperand);
    return multiplication;
}

function divide(){
    let division = Number(firstOperand) / Number(secondOperand);
    return division;
}

function operate(){
    switch(operator){
        case 'add':
            displayValue = add();
            break;
        case 'subtract':
            displayValue = subtract();
            break;
        case 'multiply':
            displayValue = multiply();
            break;
        case 'divide':
            displayValue = divide();
            break;
    }
    firstOperand = displayValue;
    secondOperand = '';
    return displayValue;
}

const calcContainer = document.querySelector(".calc-container");
let primaryCalculatorScreen = document.querySelector(".primary-calc-screen");

calcContainer.addEventListener("click", (e) =>{
    let target = e.target;
    if(target.classList.contains("number") && operator === ''){
        firstOperand += target.id;
        primaryCalculatorScreen.textContent = firstOperand;
    }
    else if(target.classList.contains("operator")){
        if(firstOperand === ''){
            firstOperand = 0;
        }
        else if(operator !== ''){
            primaryCalculatorScreen.textContent = operate();
        }
        operator = target.id;
    }
    else if(target.classList.contains("number") && operator !== ''){
        secondOperand += target.id;
        primaryCalculatorScreen.textContent = secondOperand;
    }
    else if(target.id == 'clear'){
        firstOperand = '';
        secondOperand = '';
        operator = '';
        displayValue = 0;
        primaryCalculatorScreen.textContent = displayValue;
    }
    else{
        primaryCalculatorScreen.textContent = operate();
    }
    

});


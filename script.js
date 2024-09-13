let firstOperand = '';
let secondOperand = '';
let operator = '';

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
    let result;
    switch(operator){
        case 'add':
            console.log("Performing Addition!")
            result = add();
            break;
        case 'subtract':
            result = subtract();
            break;
        case 'multiply':
            result = multiply();
            break;
        case 'divide':
            result = divide();
            break;
    }
    return result;
}

const calcContainer = document.querySelector(".calc-container");
let primaryCalculatorScreen = document.querySelector(".primary-calc-screen");

calcContainer.addEventListener("click", (e) =>{
    let target = e.target;
    if(target.classList.contains("number") && operator === ''){
        firstOperand += target.id;
        primaryCalculatorScreen.textContent = firstOperand;
        console.log('first number: '+firstOperand)
    }
    else if(target.classList.contains("operator")){
        if(firstOperand === ''){
            firstOperand = 0;
        }
        operator = target.id;
        console.log(operator)
    }
    else if(target.classList.contains("number") && operator !== ''){
        secondOperand += target.id;
        primaryCalculatorScreen.textContent = secondOperand;
        console.log('second number: '+secondOperand)
    }
    else{
        primaryCalculatorScreen.textContent = operate();
    }
    

});


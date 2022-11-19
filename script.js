
let expression = '';
let splitString = '';
function buttonClick(component) {
    let resultView = document.getElementById("viewresult");
    let value = component.getAttribute('data-value');

    
    if (isNaN(value) && value != 'equal' && value != '.') {
        splitString = value;
    }

    if (value === "AC") {
        expression = '';
        resultView.innerHTML = '0';
    } else if (value === 'equal') {
        // apply calculation
        let finalValue = expression.split(splitString);
        let numberLeft = Number(finalValue[0]);
        let numberRight = Number(finalValue[1]);

        let result = getCalculatedResult(numberLeft, splitString, numberRight);
        console.log(result)
        resultView.innerHTML = result;
    } else {
        expression += value;
        resultView.innerHTML = expression;
    }
    
}

function getCalculatedResult(leftOperand,operator,rightOperand) {
    switch (operator) {
        case '+':
            return leftOperand + rightOperand
        case '-':
            return leftOperand - rightOperand
        case '*':
            return leftOperand * rightOperand
        case '/':
            return leftOperand / rightOperand
    }
}
var newLine = true;
var runningTotal = 0;
var currentOperator = null;

function digitBtnPressed(button) {

    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

// Event Handler for when AC is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    runningTotal = 0;
    currentOperator = null;
    newLine = true;
}

// Event Handler for the operands
function operatorBtnPressed(operator) {

    var currentValue = parseInt(document.getElementById("inputBox").value);

    if (currentOperator !== null) {
        switch (currentOperator) {
            case "+":
                runningTotal += currentValue;
                break;
            
            case "-":
                runningTotal -= currentValue;
                break;
            
            case "*":
                runningTotal *= currentValue;
                break;
            
            case "/":
                runningTotal /= currentValue;
                break;
        }
    } else {
        runningTotal = currentValue;
    }

    currentOperator = operator;
    newLine = true;
}

// Event Handler for the equals button
function equalsBtnPressed() {
    var currentValue = parseInt(document.getElementById("inputBox").value);

    switch (currentOperator) {
            case "+":
                runningTotal += currentValue;
                break;
            
            case "-":
                runningTotal -= currentValue;
                break;
            
            case "*":
                runningTotal *= currentValue;
                break;
            
            case "/":
                runningTotal /= currentValue;
                break;
        }
    document.getElementById("inputBox").value = runningTotal;
    currentOperator = null;
    newLine = true;
    console.log(finalTotal);
}


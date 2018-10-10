
var keyVal;
var operation = "";
var calcKeys = document.querySelectorAll('.calc-btn');
var resultDisplay = document.querySelector('.resultDisplay');
var opDisplay = document.querySelector('.operationDisplay');
calcKeys.forEach(key => key.addEventListener('click',(e) => {
    switch (key.value) {
        case 'AC':
            operation = "";
            opDisplay.value = "";
            resultDisplay.value = "";
            break;
        case '=':
            doCalc(operation);
            break;
        case 'DEL':
            removeLast(operation);
            break;    
        default:
            operation = operation + key.value
            updateDisplay(operation);
            break;
    }
 }));

function updateDisplay(op) {
    opDisplay.value = op;
    operation = op;
}

function doCalc(op) {
    try {
        resultDisplay.value = eval(op);
        operation=""; 
    }
    catch(err) {
        resultDisplay.value = '..3rr0r..'
    }
}
function removeLast(op) {
    op = op.substr(0,(op.length -1));
    updateDisplay(op);
}
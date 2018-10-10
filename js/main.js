
var keyVal;
var operation = "";
var calcKeys = document.querySelectorAll('.calc-btn');
calcKeys.forEach(key => key.addEventListener('click',(e) => {
    switch (key.value) {
        case 'AC':
            operation = "";
            break;
        case '=':
            doCalc(operation);
            break;
    /*    case 'AC':
            operation = "";
            break;    
        case 'AC':
            operation = "";
            break;
        case 'AC':
            operation = "";
            break;    */
        default:
            operation = operation + key.value
            break;
    }
    /*operation = operation + key.value;
    console.log(key.value); 
    console.log(operation);*/
    document.querySelector('.operationDisplay').value = operation;    
}));

function doCalc(op) {
    console.log(op);
    
}

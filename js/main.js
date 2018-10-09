
var keyVal;
var calcKeys = document.querySelectorAll('.calc-btn');
calcKeys.forEach(key => key.addEventListener('click',(e) => {
    console.log(key.value); 
}));
/* For displaying the value */
function appendToDisplay(value) {  
    const display = document.getElementById('display');
    display.value += value;
}

/* For clearing the display */
function clearDisplay() {   
    document.getElementById('display').value = '';

}

 /* For backspace button */
function deleteLast() {  
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

/* To get the result */
function calculateResult() {  
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;

}
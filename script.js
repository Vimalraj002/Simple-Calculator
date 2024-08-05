// Displays the clicked numbers or operators
function getValue(value){
    document.getElementById('result').value += value;
}

// Clears the values in the display box 
function clearScreen(){
    document.getElementById('result').value = '';
}

// Calculating the result 
function calculateResult(){
    document.getElementById('result').value = eval(result.value);
}
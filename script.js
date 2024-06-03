function add (num1,num2){
    return (num1+num2);
}
function subtract (num1, num2){
    return num1-num2;
}
function multiply (num1, num2){
    return num1*num2;
}
function divide (num1, num2){
    return num1/num2;
}
function operate (num1, num2, operator){
    if (operator === "+"){
        return add(1,1);
    }
    if (operator === "-"){
        return subtract(1,1);
    }
    if (operator === "*"){
        return multiply(1,1);
    }
    if (operator === "/"){
        return divide(1,1);
    }
}

console.log(operate(1,1,"+"));
console.log(operate(1,1,"-"));
console.log(operate(1,1,"*"));
console.log(operate(1,1,"/"));

const table = document.getElementById("calcTable");
const result = document.getElementById("result");
let displayValue = "";
let num1;
table.addEventListener("click", (event) => {
    if (isNumber(event.target.innerText)){
        displayValue += event.target.innerText;
        displayValue = Number(displayValue);
    } else {
        num1 = displayValue;
    }
    console.log(num1);
    result.textContent = `${displayValue}`;
    console.log(displayValue);
    
});

function isNumber (num){
    if(isNaN(Number(num))){
        return false;
    }
    return true;
}


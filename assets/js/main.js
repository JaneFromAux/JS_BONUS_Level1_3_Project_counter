
let output = document.getElementById('output');
let result = 0;

function plusOne() {
    console.log('plusOne');
    result++;
    output.innerHTML = result;
}
function minusOne() {
    console.log('minusOne');
    result--;
    output.innerHTML = result;
}
function plusTen() {
    console.log('plusTen');
    result += 10;
    output.innerHTML = result;
}
function minusTen() {
    console.log('minusTen');
    result -= 10;
    output.innerHTML = result;
}
function plusOneHundred() {
    console.log('plusOneHundred');
    result += 100;
    output.innerHTML = result;
}
function minusOneHundred() {
    console.log('minusOneHundred');
    result -= 100;
    output.innerHTML = result;
}
function valueGone() {
    console.log('reset');
    result = 0;
    output.innerHTML = result;
}
function multiplyWithTwo() {
    console.log('multiply with 2');
    result *= 2;
    output.innerHTML = result * 2;
}
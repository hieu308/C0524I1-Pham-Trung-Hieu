

function calculate(operation) {
    let firstInput = Number(document.getElementById("first-number").value);
    let secondInput = Number(document.getElementById("second-number").value);
    let result;

    switch (operation) {
        case 'add':
            result = firstInput + secondInput;
            break;
        case 'subtract':
            result = firstInput - secondInput;
            break;
        case 'multiply':
            result = firstInput * secondInput;
            break;
        case 'divide':
            result = (firstInput / secondInput).toFixed(2);
            break;
    }

    document.getElementById("display").innerHTML = `${result}`;
}

function c() {
    calculate('add');
}

function t() {
    calculate('subtract');
}

function n() {
    calculate('multiply');
}

function cC() {
    calculate('divide');
}
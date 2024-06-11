let view = document.getElementById("display");
function calculate(value){
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function deleted() {
    view.value = "";
}
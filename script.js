let outputScreen = document.getElementById('output-screen')

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    outputScreen.value = eval(outputScreen.value);
}

function Clear() {
    outputScreen.value = '';
}

function Del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
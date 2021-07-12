console.log(document.body);


var titleElement = document.getElementById('title')

console.log(titleElement);

titleElement.style.color = "red";

// var listItems = document.getElementsByTagName('li')
// console.log(listItems);
//
//
// listItems[1].style.color= "blue"
//
// for (var i =0; i< listItems.length; i++){
//   if (listItems[i].innerHTML == "item 3"){
//     listItems[i].style.color = "red";
//   }
// }
//
// titleElement.addEventListener("click", function(){
//   console.log("element is clicked");
//   titleElement.style.color = "black"
// })
//
// titleElement.addEventListener("mouseout", function(){
//   console.log("moved away");
//   titleElement.style.color = "red";
// })

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen");
var firstNumber = null;

//Operator
var operator = null;

var secondNumber = null;
var result = null;

function calculateResult() {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    if (secondNumber != null) {
        if (operator == "+") {
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
        }
        if (operator == "-") {
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
        }
        if (operator == "x") {
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
        }
        if (operator == "/") {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
        }
        if (operator == "%"){
          result = parseFloat(firstNumber) % parseFloat(secondNumber);
        }
    }
    display.innerHTML = result;
    firstNumber = null;
    secondNumber = null;
    operator = null;
}
var firstNumberCheck = 1;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var buttonValue = buttons[i].innerText
        if (buttonValue == "+" || buttonValue == "-" || buttonValue == "x" || buttonValue == "/" || buttonValue == "%") {
            operator = buttonValue;
            if (firstNumberCheck == 0) {
                firstNumber = calculateResult();
            }
            firstNumberCheck = 0;
        } else if (buttonValue == "A/C") {
            firstNumber = null;
            secondNumber = null;
            operator = null;
            display.innerHTML = 0;
            firstNumberCheck = 1;
        } else if (buttonValue == "+/-") {
            if (firstNumberCheck == 1) {
                if (firstNumber == null) {
                    firstNumber = "-"
                } else {
                    firstNumber = -parseFloat(firstNumber);
                }
                display.innerHTML = firstNumber;
            } else {
                if (!secondNumber) {
                    secondNumber = "-"
                } else {
                    secondNumber = -parseFloat(secondNumber);
                }
                display.innerHTML = secondNumber;
            }
        } else if (!firstNumber) {
            firstNumber = buttonValue;
            display.innerHTML = firstNumber;
        } else if (firstNumberCheck == 1) {
            firstNumber += buttonValue;
            display.innerHTML = firstNumber;
        } else if (!secondNumber) {
            secondNumber = buttonValue;
            display.innerHTML = secondNumber;
        } else if (buttons[i].innerHTML.match("=")) {
            buttons[i].addEventListener('click', calculateResult())
            firstNumberCheck = 1;
        } else if (firstNumberCheck == 0) {
            secondNumber += buttonValue;
            display.innerHTML = secondNumber;
        }
    })
}

console.log(document.body);


var titleElement = document.getElementById('title')

console.log(titleElement);

titleElement.style.color= "red";

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
var firstNumber= null;

//Operator
var operator=null;

var secondNumber = null;


function calculateResult(){
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  firstNumber=null;
  secondNumber=null;
  operator=null;
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',function(){
    display.innerHTML = buttons[i].innerHTML;
    if(!firstNumber){
      firstNumber=buttons[i].innerText;
    }
    else if(!operator){
      operator = buttons[i].innerText;
    }
    else if(!secondNumber){
      secondNumber = buttons[i].innerText;
    }
    if(buttons[i].innerHTML.match("=")){
      buttons[i].addEventListener('click',calculateResult)
    }
  })
}

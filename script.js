
// console.log("I am here")
// var name = "Tom";
// debugger
// var surname = "Canfield";
// var age = 24;
// console.log(name +" "+ surname +" is " + age);
addNumbers(3,6);
// var stores any strings, numbers etc.

// functions are hoisted automatically by JavaScript
// so the code is always produced first
function addNumbers(num1, num2){
  var result = num1 + num2;
  console.log(result);
  return result;
}

// Function Exercise
var answer= addNumbers(addNumbers(5,7),addNumbers(addNumbers(10,2),2));
console.log(answer);

// datatypes
var string = "Hello" //can be single or double quotes
console.log("String: " + string);

//  Get length
console.log(string.length);

// Index of a character
console.log(string.indexOf('e'));

// sub string
console.log(string.substr(2,4));

// Numbers
var myNumber = 5;

var myOtherNumber=5.5;

var myExponential=123e5;

console.log(myNumber);
console.log(myOtherNumber);
console.log(myExponential);

// Modulus
console.log(myNumber % 2);

// Boolean
var booltrue = true;
var boolfalse = false;

console.log(booltrue);
console.log(boolfalse);

// Arrays
// anything data type can be stored in an array
var myArray = [5,6,7,"a","starfish",true];
console.log(myArray[2]);

// can call a function from within an array

console.log(myArray.length);

myArray[0] = 9;
myArray = myArray.concat(["more","stuff"]);
console.log(myArray[7]);

// Type Coersion

var myString = "5";
var myNumber = 3;
var myDecimalString = "2.5";
var number = 3;

console.log(myString + myNumber);
console.log(parseInt(myString)+number);
console.log(parseFloat(myDecimalString)+number);
console.log(parseInt(myDecimalString)+number);

// Control Flow

var money_in_my_pocket = prompt('How much money do you have?')


var name = prompt("What is your name?") || "Captain no-name";
console.log(name);


// Loops
//while
var x = 5;
while (x < 10 ) {
  console.log("Loop");
  x+=1;
}

// for

var array = [1,2,3,4,5];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// do while

do{
  console.log("loop just once");
}while(x<5)

// for in
var obj = {
  name:"Tom",
  age: 14,
  school: "sjwms",
  exam_results:{
    maths:true
  }
}

for (var key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// Scope - where things are in relation to where they can server
// Lexical scope: code can see in but can't see out

// global scope
var outsideVariable = 5;

function doSomething() {
  console.log(outsideVariable);
}

doSomething();

function doOtherThing(){
  // local scope
  var insideVariable= 5;
}
// if you create a variable within a function without a declaration it creates
// a  global version
// can't see this variable as you can't see up a level to the function

// The DOM - Document Object Model

 

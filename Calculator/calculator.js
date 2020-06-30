let runningTotal = 0; // Total
let buffer = "0"; //The input, everything on the Dom is a string so lets just make it a string
let previousOperator; // keeping track of operator pressed
const screen = document.querySelector(".screen");





//isNaN() is a function that tells us if something is not a number
function buttonClick(value) {
  if (isNaN(parseInt(value))) { //turns the value into a number, isNaN checks to see if parseInt returns NaN,
    handleSymbol(value); //if not number
  } else {
    handleNumber(value);//if number
  }
  rerender(); //renders the value
}




function handleNumber(value) {
  if (buffer === "0") {// if the buffer is 0,
    buffer = value; // The value is given to the button
  } else {
    buffer += value; // if not then the value is appened to the end of the buffer
  }
}

function handleMath(value) {
  if (buffer === "0") {
    // do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(value) {
  //instead of using a bunch if else statements, we can us a switch statement
  switch (value) { //takes a value, and switch code block based on that value
    case "C"://if value === to "C"
      buffer = "0";
      runningTotal = 0;
      break;//end of case
    case "=": //if value === to "="
      if (previousOperator === null) {//if no previousOperator
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));//turn buffer into a nuumber
      previousOperator = null;//
      buffer = +runningTotal; // buffer is going to be 
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);//takes one off of buffer
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}


//function that renders the value of the buffer on the screen
function rerender() {
  screen.innerText = buffer;
}


// ```Listens for the buttons on calculator to be clicked, then runs the
// buttonClick() function on that button```
function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });
}

init();
const userInput = document.querySelector(".display");
const resetButton = document.querySelector(".reset-button");
const answerButton = document.querySelector(".answer-button");
const deleteButton = document.querySelector(".delete-button");
const buttons = document.querySelectorAll(".button");

const buttonsArray = Array.from(buttons);

let lastButtonIsOperator = false; 
let decimalAdded = false; 

const buttonClickHandler = (event) => {
  console.log("buttonClicked: ", event.target.innerText);

  const value = event.target.innerText;

  if (value === "." && decimalAdded) {
    
    return;
  }

  if ("+-x/".includes(value)) {
    
    if (lastButtonIsOperator) {
      
      initalValue = userInput.value;
      updatedValue = initalValue.substring(0, initalValue.length - 1) + value;
      console.log(updatedValue);
      userInput.value = updatedValue;
      return;
    }

    lastButtonIsOperator = true; 
    decimalAdded = false; 
  } else {
    
    lastButtonIsOperator = false; 
    if (value === ".") {
      decimalAdded = true;
    }
  }

  userInput.value += value; 

  
  userInput.scrollLeft = userInput.scrollWidth; 
};

const resetHandler = () => {
  console.log("Reset Clicked");
  userInput.value = "";
};

const deleteHandler = () => {
  console.log("Delete Clicked");
  initalValue = userInput.value;
  updatedValue = initalValue.substring(0, initalValue.length - 1);
  userInput.value = updatedValue;
};

const expressionHandler = (expression) => {
  console.log("Inside expression handler");

 
  const formattedExpression = expression.replace(/x/g, "*");

 
  const result = eval(formattedExpression);

  return result;
};

const answerHandler = () => {
  console.log("answerClicked");


  const expression = userInput.value;
  const result = expressionHandler(expression);
  userInput.value = result;
};

buttonsArray.forEach((button) => button.addEventListener("click", buttonClickHandler));
resetButton.addEventListener("click", resetHandler);
deleteButton.addEventListener("click", deleteHandler);
answerButton.addEventListener("click", answerHandler);
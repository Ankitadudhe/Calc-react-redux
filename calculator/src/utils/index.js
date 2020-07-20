export const calculation = (calcArray, currentResult) => {
  // Get the current calc array 
  // Convert calc array to string
  if (isNaN(calcArray[calcArray.length - 1])) {
    return currentResult;
  }

  // Operator functions that are invoked
  // on the loop to calculate the values
  // in calculation array
  const operatorFunctions = {
    '+': (a, b) => {
      return a + b;
    },
    '-': (a, b) => {
      return a - b;
    },
    '*': (a, b) => {
      return a * b;
    },
    '/': (a, b) => {
      return a / b;
    }
  };

  // Join the calc array to create a string
  //  to make it easier to join the numbers
  // the calculation loop can be done
  let calcString = calcArray.join('');

  // Split the calc string based on the operators
  // This will allow me to combine the numbers and seperate
  let calcArrayUpdated = calcString.split(/(\+|-|\*|\/)/g);

  let result = 0;


  let operator = '+';

  // Loop and calculate
  for (let i = 0; i < calcArrayUpdated.length; i++) {
    let item = calcArrayUpdated[i];
    // Test if the last value is an operator
    let isOperator = /(\+|-|\*|\/)/.test(item);

    // Sets the last operator in the array
    if (isOperator) {
      operator = item;
    } else {
      result = operatorFunctions[operator](result, parseInt(item));
    }
  }

  return result;
}

export const addValueToCalculation = (value, currentState) => {
  currentState = [...currentState];

  let operatorValues = ['*', '/', '+', '-'];


  if (typeof value !== 'number' && !operatorValues.includes(value)) {
    return currentState;
  }

  if (operatorValues.includes(value) && !currentState.length) {
    return currentState;
  }


  let lastVal = currentState[currentState.length - 1];

  let lastValIsOperator = operatorValues.includes(lastVal);

  let currentValIsOperator = operatorValues.includes(value);


  if (lastValIsOperator && currentValIsOperator) {

    currentState[currentState.length - 1] = value;


    return currentState;
  }

  return [...currentState, value];
}

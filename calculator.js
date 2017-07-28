//Create each value as an object in an array

let interfaceItems = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '×',
        value: '*',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '.',
        value: '.',
    },

    {
        text: '+',
        value: '+',
    },

    {
        text: '=',
        value: '=',
    },
];

//Set up variables so that the objects become functions

//this sets the current expression to an empty string so that it can be displayed and transformed based on user inputs
let currentExpression = '';

//select calculator element
let calculatorElement = document.getElementById('calculator');

//display element that shows the current expression
let display = document.createElement('div');

//display the calculator box
display.classList.add('calculator-display');

//clear button is not in the array because it has different functionalities
let clearButton = createButton('CE');

clearButton.addEventListener('click', function () {
  currentExpression = '';
  updateDisplay();
})

//Appends both display and clear buttons (they are not in the array)
calculatorElement.appendChild(display);
calculatorElement.appendChild(clearButton);

//This runs a forEach loop through all items in the array and appends them to be displayed if they are selected
interfaceItems.forEach(function (item) {

  let b = createButton(item.text);

  if (item.value === '=') {
    b.classList.add('equals');

    b.addEventListener('click', function () {
        //try to catch an error
        try {
        //eval is a built-in JS function that parses math for you-this is the shortcut
        currentExpression = '' + eval(currentExpression);
      } catch (error) {
        console.log('Bad expression');
        currentExpression = '';
      }
        updateDisplay();
    });

  } else {
      if (typeof item.value === 'number') {
      b.classList.add('number');
    } else if (item.value === '.') {
      b.classList.add('decimal');
    }  else {
      b.classList.add('operation');
    }

      b.addEventListener('click', function () {
        if (currentExpression.length >= 10)
        return;

        currentExpression += '' + item.value;
        updateDisplay();
      });
  }

  calculatorElement.appendChild(b);
});


//this function passes the text from the array
function createButton (text) {
  let b = document.createElement('button');
  b.textContent = text;
  b.classList.add('calculator-button');
  return b;
}

//this function updates the display and gives a limit of 9 characters
function updateDisplay () {
  display.textContent = currentExpression.substring(0,9);
}

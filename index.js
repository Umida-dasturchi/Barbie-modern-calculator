function appendToDisplay(value) {
  let displayValue = document.getElementById('display').value;
  if (value === '←') {
    displayValue = displayValue.slice(0, -1);
  } else if (value === '÷') {
    displayValue += ' / ';
  } else {
    displayValue += value;
  }
  document.getElementById('display').value = displayValue;
}


function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

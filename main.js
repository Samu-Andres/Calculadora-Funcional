let displayvalue = '';

function appendToDisplay(value) {
  displayvalue += value;
  document.getElementById('display').value = displayvalue;
}

function clearDisplay() {
        displayvalue = '';
        document.getElementById('display').value = displayvalue;
}

function calculate() {
        try {
                const result = eval(displayvalue);
                displayvalue = result.toString();
                document.getElementById('display').value = displayvalue;
        } catch (error) {
                displayvalue = 'Error';
                document.getElementById('display').value = displayvalue;
                
        }
}
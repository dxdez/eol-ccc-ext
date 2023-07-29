# Classic Calculator Chrome Extension

The Classic Calculator Chrome Extension is a simple calculator built using React that allows users to perform basic arithmetic calculations. It supports addition, subtraction, multiplication, division, exponentiation, percentage calculations, and more. The calculator can be used both by clicking on the buttons provided and by using the keyboard for input.

## Functions

`handleButtonClick(value)`<br>
This function is called when a button in the calculator keypad is clicked. It takes a value as its parameter, which represents the value associated with the clicked button. The function first handles specific button values such as 'e' and 'p' and converts them to '^' and '%', respectively. If the calculator has a previous result (result) and the user clicks an operator, it moves the result to the input field (input) and clears the result field. It then updates the input field, handling cases where consecutive operators should not be allowed. The function also clears the result field after any button click.

`handleCalculate()`<br/>
This function is called when the '=' button is clicked or when the user presses the 'Enter' key. It evaluates the expression in the input field (input) using the evaluate function from the mathjs library. If the input is not empty, it sets the result state with the calculated result and clears the input field.

`handleNegative()`<br/>
This function is called when the '+/-' button is clicked. If there is a result (result is not empty), it toggles the sign of the result. If there is no result, it evaluates the expression in the input field with a negative sign and sets the result state with the calculated negative result.

`handleClear()`<br/>
This function is called when the 'CE' button is clicked. It clears both the result and input states, effectively resetting the calculator.

`handleKeyboardInput(event)`<br/>
This function is triggered when the user presses any key while the calculator is open. It listens for keyboard input and simulates button clicks based on the pressed keys. If the pressed key is a number or an operator, it finds the corresponding button with the data-key attribute and clicks it.

## Usage

Button Clicks: Users can click on the calculator buttons to input values and perform calculations.

Keyboard Input: Users can use the keyboard for input and calculations. The following keys are supported:
- Numbers (0-9)
- Operators: `+`, `-`, `*`, `/`, `^`, `%`
- `Enter` key for evaluating the expression
- `n` key for changing the sign (negative/positive)
- `e` key for exponentiation ('^')
- `p` key for percentage ('%')
- `.` key for decimal point

## Setup and Build

This project uses the Vite configuration, you can set up Vite by navigate to the project folder in the terminal. Then, initialize the project and install the required dependencies using npm:<br/>
`npm install --save-dev`

Now, you can run the following command to build the extension:<br/>
`npm run build-extension`

This will generate a `dist` folder containing the built files along with the manifest.json and icons folder. You can use this folder to load your chrome extension, to do so follow the steps below:
- Open Google Chrome and go to the Extensions page by entering `chrome://extensions/` in the address bar.
- Enable the `Developer mode` toggle at the top right corner of the page.
- Click on the `Load unpacked` button and select the dist folder of your extension.





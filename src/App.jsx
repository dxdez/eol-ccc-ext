import { useState } from 'react'
import './App.css'

const App = () => {
	const [result, setResult] = useState('');
	const [input, setInput] = useState('');

	const handleButtonClick = (value) => {
		if(result !== '' && input === '') {
			setResult('');
		}
		setInput((prevInput) => prevInput + value);
		setResult('');
	};

	const handleCalculate = () => {
		try {
			const calculatedResult = eval(input);
			setResult(calculatedResult.toString());
			setInput('');
		} catch (error) {
			setResult('Error');
		}
	};

	const handleClear = () => {
		setResult('');
		setInput('');
	};

	return (
		<div className="calculator">
			<div className="result">{result !== '' ? result : input}</div>
			<div className="keypad">
				<button onClick={() => handleButtonClick('7')}>7</button>
				<button onClick={() => handleButtonClick('8')}>8</button>
				<button onClick={() => handleButtonClick('9')}>9</button>
				<button onClick={() => handleButtonClick('+')}>+</button>
				<button onClick={() => handleButtonClick('4')}>4</button>
				<button onClick={() => handleButtonClick('5')}>5</button>
				<button onClick={() => handleButtonClick('6')}>6</button>
				<button onClick={() => handleButtonClick('-')}>-</button>
				<button onClick={() => handleButtonClick('1')}>1</button>
				<button onClick={() => handleButtonClick('2')}>2</button>
				<button onClick={() => handleButtonClick('3')}>3</button>
				<button onClick={() => handleButtonClick('*')}>*</button>
				<button onClick={() => handleButtonClick('0')}>0</button>
				<button onClick={() => handleCalculate()}>=</button>
				<button onClick={() => handleButtonClick('/')}>/</button>
				<button onClick={() => handleClear()}>Clear</button>
			</div>
		</div>
	);
};

export default App

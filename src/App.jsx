import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs';
import './App.css'

const App = () => {
	const [result, setResult] = useState('');
	const [input, setInput] = useState('');
	const [operators, setOperators] = useState(['.','+','-','*','/']);

	const handleButtonClick = (value) => {
		if(value !== '') {
			if (result !== '' && input === '') {
				setInput(result);
				setResult('');
			}
			setInput((prevInput) => {
				const prArr = prevInput.split('');
				if (operators.includes(prArr[prArr.length-1]) && operators.includes(value)) {
					return prevInput;
				} else {
					return prevInput + value;
				}
			});
			setResult('');
		}
	};

	const handleCalculate = () => {
		try {
			if (input !== '') {
				const calculatedResult = evaluate(input);
				setResult(calculatedResult.toString());
				setInput('');
			}
		} catch (error) {
			console.log(error);
			setResult('Error');
		}
	};

	const handleClear = () => {
		setResult('');
		setInput('');
	};

	const handleKeyboardInput = (event) => {
		const { key } = event;
		if (!isNaN(key) || operators.includes(key) || key == 'Enter' || key == 'Escape') {
			const button = document.querySelector(`button[data-key="${key}"]`);
			if(button) {
				button.click();
			}
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyboardInput);

		return () => {
			window.removeEventListener('keydown', handleKeyboardInput);
		};
	}, []); 

	return (
		<div className="calculator">
			<div className="result">{result !== '' ? result : (input !== '' ? input : '')}</div>
			<div className="keypad">
				<button onClick={() => handleButtonClick('')} data-key="">&#8730;</button>
				<button onClick={() => handleButtonClick('')} data-key="">&#960;</button>
				<button onClick={() => handleButtonClick('')} data-key="">%</button>
				<button onClick={() => handleButtonClick('+')} data-key="+">+</button>
				<button onClick={() => handleButtonClick('7')} data-key="7">7</button>
				<button onClick={() => handleButtonClick('8')} data-key="8">8</button>
				<button onClick={() => handleButtonClick('9')} data-key="9">9</button>
				<button onClick={() => handleButtonClick('-')} data-key="-">-</button>
				<button onClick={() => handleButtonClick('4')} data-key="4">4</button>
				<button onClick={() => handleButtonClick('5')} data-key="5">5</button>
				<button onClick={() => handleButtonClick('6')} data-key="6">6</button>
				<button onClick={() => handleButtonClick('*')} data-key="*">*</button>
				<button onClick={() => handleButtonClick('1')} data-key="1">1</button>
				<button onClick={() => handleButtonClick('2')} data-key="2">2</button>
				<button onClick={() => handleButtonClick('3')} data-key="3">3</button>
				<button onClick={() => handleButtonClick('/')} data-key="/">/</button>
				<button onClick={() => handleButtonClick('0')} data-key="0">0</button>
				<button onClick={() => handleCalculate()} data-key="Enter">=</button>
				<button onClick={() => handleButtonClick('.')} data-key=".">.</button>
				<button onClick={() => handleClear()} data-key="Escape">CE</button>
			</div>
		</div>
	);
};

export default App

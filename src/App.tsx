import { useState, useEffect } from 'react';
import { result } from './data/main-data';
import { maxTry } from './data/constant';
import { findRandomResult } from './helpers/random-helper';
import InputBox from './components/InputBox';
import './App.css'

function App() {
	const [resultData, setResultData] = useState<string[]>(() => []);
	const [letter, setLetter] = useState<string[]>(() => []);

	useEffect(() => {
		const data = findRandomResult(result);
		setResultData(data);
	}, []);

	return (
		<div className='outer-container'>
			{
				new Array(maxTry).fill(0).map((item, index) => {
					return (
						<InputBox
							key={index}
							setLetter={setLetter}
							letter={letter}
							result={resultData}
						/>
					)
				})
			}
		</div>
	)
}

export default App

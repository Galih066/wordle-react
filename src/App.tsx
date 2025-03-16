import { useState, useEffect } from 'react';
import { result } from './data/main-data';
import { findRandomResult } from './helpers/random-helper';
import './App.css'

function App() {
	const [resultData, setResultData] = useState<string>(() => '');

	useEffect(() => {
		const data = findRandomResult(result);
		setResultData(data)
	}, []);

	return (
		<div className='outer-container'>
			<h1>{resultData}</h1>
		</div>
	)
}

export default App

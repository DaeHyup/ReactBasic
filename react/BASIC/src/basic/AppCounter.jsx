// 내부적으로 state 를 어떻게 가지고 되는지, 이벤트를 처리하는 방법

import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
	const [count, setCount] = useState(0);
	
	const handleClick = () => setCount((prev) => prev + 1);
	
	return (
		<div className='container'>
			<div className='banner'>
				Total Count: {count} {count > 10 ? '🔥' : '❄️'}
			</div>
			<div className='counters'>
				<Counter total={count} onClick={handleClick} />
				<Counter total={count} onClick={handleClick} />	
			</div>
		</div>
	);
}
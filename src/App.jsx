import './App.css';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='App'>
			<h2>Counter App</h2>
			<p>Count: {count}</p>
			<button onClick={() => setCount((prev) => prev + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prev) => prev - 1)}>
				Decrement
			</button>
		</div>
	);
}

export default App;

import React, {useState} from "react";

export default function Counter() {
	const [num, setNumber] = useState(0);
	const onIncrease = () => {
		setNumber(prev => prev + 1);
	};
	const onDecrease = () => {
		setNumber(prev => prev - 1);
	};
	return (
		<div>
			<h1>{num}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

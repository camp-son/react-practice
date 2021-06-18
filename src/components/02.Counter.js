import React, {useReducer} from "react";

function reducer(state, action) {
	console.log(state, action);
	switch(action.type) {
		case 'INCREASE':
			return state + 1;
		case 'DECREASE':
			return state - 1;
		default:
			return state;
	}
}

function Counter() {
	const [num, dispatch] = useReducer(reducer, 0);
	const onIncrease = () => {
		dispatch({type: 'INCREASE'});
	};
	const onDecrease = () => {
		dispatch({type: 'DECREASE'});
	};
	return (
		<>
			<h1>{num}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</>
	);
}

// useState
// function Counter() {
// 	const [num, setNumber] = useState(0);
// 	const onIncrease = () => {
// 		setNumber(prev => prev + 1);
// 	};
// 	const onDecrease = () => {
// 		setNumber(prev => prev - 1);
// 	};
// 	return (
// 		<div>
// 			<h1>{num}</h1>
// 			<button onClick={onIncrease}>+1</button>
// 			<button onClick={onDecrease}>-1</button>
// 		</div>
// 	);
// }

export default Counter;

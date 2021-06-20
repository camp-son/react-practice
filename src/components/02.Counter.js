import React, {Component, useReducer} from "react";

function reducer(state, action) {
	switch(action.type) {
		case 'INCREASE':
			return state + 1;
		case 'DECREASE':
			return state - 1;
		default:
			return state;
	}
}

// function Counter() {
// 	const [num, dispatch] = useReducer(reducer, 0);
// 	const onIncrease = () => {
// 		dispatch({type: 'INCREASE'});
// 	};
// 	const onDecrease = () => {
// 		dispatch({type: 'DECREASE'});
// 	};
// 	return (
// 		<>
// 			<h1>{num}</h1>
// 			<button onClick={onIncrease}>+1</button>
// 			<button onClick={onDecrease}>-1</button>
// 		</>
// 	);
// }

class Counter extends Component {
	state = {
		counter: 0,
		fixed: 1
	};

	constructor(props) {
		super(props);
		console.log('constructor', props);
		// this.state = {
		// 	counter: 0
		// };
	}

	static getDerivedStateFromProps(next, prev) {
		console.log('getDerivedStateFromProps', next, prev);
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount', this.props, this.state);
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return this.state.counter % 3 === 0;
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	
	// onClickIncrease = () => {};
	onClickIncrease() {
		// 바로 반영되지 않는다. 2가 증가하지 않는다.
		this.setState({
			counter: this.state.counter + 1
		});
		this.setState({
			counter: this.state.counter + 1
		});
	}

	// onClickDecrease = () => {};
	onClickDecrease() {
		this.setState({
			counter: this.state.counter - 1
		});
	}

	render() {
		return (
			<>
				<h1>{this.state.counter}</h1>
				<button onClick={this.onClickIncrease.bind(this)}>+1</button>
				<button onClick={this.onClickDecrease.bind(this)}>-1</button>
				고정된 값 : {this.state.fixed}
			</>
		)
	}
}

export default Counter;

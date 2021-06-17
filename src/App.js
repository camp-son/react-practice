import './App.css';
import React from 'react';
import Hello from './00.Hello';
import Wrapper from './01.Wrapper';
import Counter from './02.Counter';
import InputSample from './03.InputSample';

function App() {
	const name = 'camp-son';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: 24,
		padding: '1rem'
	};
	const divTag = <div>TEST</div>;
	return (
		// Fragment 
		// <>
		<Wrapper>
			<Counter/>
			<InputSample />
		{/* 이건 주석이야! */}
		/* 이건 주석이 아니야! */
			<Hello 
				// 태그 내부 주석
				name="camp-son"
				color="gray"
			/>
			<Hello 
				name="YJLee"
				color="purple"
				isRequired
			/>

			<Hello />

			{/* <input> */}
			<input/>
			{/* <br> */}
			<br/>

			<div style={style}>{name}</div>
			<div className="gray-box"></div>

			{divTag}
		</Wrapper>
		// </>
		// <h2>Hello</h2>
		// <div></div>
	);
}

export default App;

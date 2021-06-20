import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wrapper from './components/01.Wrapper';
import Counter from './components/02.Counter';

ReactDOM.render(
  	<React.StrictMode>
		<Wrapper>
			<App />
		</Wrapper>
		{/* <Hello /> */}
		<Wrapper>
			<Counter />
		</Wrapper>
		{/* <Wrapper>
			<InputSample />
		</Wrapper> */}
		{/* <Wrapper>
			<Hello 
				name="camp-son"
				color="gray"
			/>
			<Hello 
				name="YJLee"
				color="purple"
				isRequired
			/>

			<Hello />

			<input/>
			<br/>

			<div style={style}>{name}</div>
			<div className="gray-box"></div>
			{divTag}
		</Wrapper> */}
  	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

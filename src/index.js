import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Wrapper from './components/01.Wrapper';
// import Counter from './components/02.Counter';
import reportWebVitals from './reportWebVitals';
// import App from './errors/App';
// import * as Sentry from '@sentry/browser';
import './redux-exercise';

// ReactDOM.render(
//   	<React.StrictMode>
// 		<Wrapper>
// 			<App />
// 		</Wrapper>
// 		{/* <Hello /> */}
// 		<Wrapper>
// 			<Counter />
// 		</Wrapper>
// 		{/* <Wrapper>
// 			<InputSample />
// 		</Wrapper> */}
// 		{/* <Wrapper>
// 			<Hello
// 				name="camp-son"
// 				color="gray"
// 			/>
// 			<Hello
// 				name="YJLee"
// 				color="purple"
// 				isRequired
// 			/>

// 			<Hello />

// 			<input/>
// 			<br/>

// 			<div style={style}>{name}</div>
// 			<div className="gray-box"></div>
// 			{divTag}
// 		</Wrapper> */}
//   	</React.StrictMode>,
//   	document.getElementById('root')
// );

// Sentry.init({
// 	dsn: 'https://fe4cdd0c5b514e7283a3b718d148e2d1@o873464.ingest.sentry.io/5824894'
// });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

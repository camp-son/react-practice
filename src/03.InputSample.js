import React, {useState, useRef} from 'react';

function InputSample() {
	// const [text, setText] = useState('');
	const [inputs, setInputs] = useState({
		name: '',
		nickname: ''
	});

	// 내부 값이 변경되면 함수가 계속 호출되면서 렌더링 된다.
	const nameInput = useRef();

	const {name, nickname} = inputs;

	const onChange = (e) => {
		// setText(e.target.value);
		const {value, name} = e.target;
		setInputs(prev => ({
			...prev,
			[name]: value
		}));
	};

	const onReset = () => {
		setInputs({
			name: '',
			nickname: ''
		});

		nameInput.current.focus();
	}

	return (
		<div>
			{/* <input value={text} onChange={onChange} /> */}
			<input ref={nameInput} name="name" value={name} onChange={onChange} placeholder="이름" />
			<input name="nickname" value={nickname} onChange={onChange} placeholder="닉네임" />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	);
}

export default InputSample;

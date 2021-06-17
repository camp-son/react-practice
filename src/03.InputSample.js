import React, {useState} from 'react';

export default function InputSample() {
	// const [text, setText] = useState('');
	const [inputs, setInputs] = useState({
		name: '',
		nickname: ''
	});

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
	}

	return (
		<div>
			{/* <input value={text} onChange={onChange} /> */}
			<input name="name" value={name} onChange={onChange} placeholder="이름" />
			<input name="nickname" value={nickname} onChange={onChange} placeholder="닉네임" />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	);
}

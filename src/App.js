import './App.css';
import React, {useState, useRef} from 'react';
import Hello from './00.Hello';
import Wrapper from './01.Wrapper';
import Counter from './02.Counter';
import InputSample from './03.InputSample';
import UserList from './04.UserList';
import CreateUser from './05.CreateUser';

function App() {
	const name = 'camp-son';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: 24,
		padding: '1rem'
	};
	const divTag = <div>TEST</div>;

	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'JYS',
			email: 'camp-son@naver.com',
			active: true
		},
		{
			id: 2,
			username: 'YJL',
			email: 'jyson@naver.com',
			active: false
		},
		{
			id: 3,
			username: 'JY',
			email: 'real-zero@naver.com',
			active: false
		}
	]);

	const nextId = useRef(4);

	const [user, setUser] = useState({
		username: '',
		email: ''
	});

	const {username, email} = user;

	const onCreate = () => {
		const user = {
			id: nextId.current,
			username,
			email
		};

		setUsers(users => [...users, user]);

		setUser({
			username: '',
			email: ''
		})
		nextId.current++;
	};

	const onRemove = (userId) => {
		setUsers(users => users.filter(({id}) => id !== userId));
	};

	const onToggle = (userId) => {
		setUsers(users => users.map((user) => (user.id === userId ? {...user, active: !user.active} : user)))
	}

	const onChange = (e) => {
		const {name, value} = e.target;

		setUser(prev => ({
			...prev,
			[name]: value
		}));
	}

	return (
		// Fragment 
		<>
			<Wrapper>
				<Counter/>
			</Wrapper>
			<Wrapper>
				<InputSample />
			</Wrapper>
			<Wrapper>
				<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
				<UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
			</Wrapper>
			<Wrapper>
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
		</>
		// <h2>Hello</h2>
		// <div></div>
	);
}

export default App;

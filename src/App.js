import './App.css';
import React, {useState, useRef, useMemo, useCallback} from 'react';
import Hello from './00.Hello';
import Wrapper from './01.Wrapper';
import Counter from './02.Counter';
import InputSample from './03.InputSample';
import UserList from './04.UserList';
import CreateUser from './05.CreateUser';

function countActiveUsers(users) {
	console.log('활성 사용자 수 체킹');
	return users.filter(({active}) => active).length;
}

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

	const count = useMemo(() => countActiveUsers(users), [users]);

	// const list = [1,2,3,4,5];
	// const test = useMemo(() => {
	// 	console.log('계산...')
	// 	return list.length;
	// }, [users, list]);

	const nextId = useRef(4);

	const [user, setUser] = useState({
		username: '',
		email: ''
	});

	const {username, email} = user;

	const onCreate = useCallback(() => {
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
	}, [/* users,  */username, email]);

	const onRemove = useCallback((userId) => {
		setUsers(users => users.filter(({id}) => id !== userId));
	}, [/* users */]);

	const onToggle = useCallback((userId) => {
		setUsers(users => users.map((user) => (user.id === userId ? {...user, active: !user.active} : user)))
	}, [/* users */]);

	const onChange = useCallback((e) => {
		const {name, value} = e.target;

		setUser(prev => ({
			...prev,
			[name]: value
		}));
	}, [user]);

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
				<div>활성화 된 사용자: {count}</div>
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

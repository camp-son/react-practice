import './App.css';
import React, {useCallback, useMemo, useReducer, useRef} from 'react';
import UserList from './components/04.UserList';
import CreateUser from './components/05.CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
	console.log('활성 사용자 수 체킹');
	return users.filter(({active}) => active).length;
}

const EVENT_NAME = {
	ON_CHANGE: 'ON_CHANGE',
	ON_CREATE: 'ON_CREATE',
	ON_TOGGLE: 'ON_TOGGLE',
	ON_REMOVE: 'ON_REMOVE'
};

const initializeState = {
	// user: {
	// 	username: '',
	// 	email: ''
	// },
	users: [
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
	]
};

function reducer(state, action) {
	switch(action.event) {
		// case EVENT_NAME.ON_CHANGE:
		// 	return {
		// 		...state,
		// 		user: {
		// 			...state.user,
		// 			[action.name]: action.value
		// 		}
		// 	};
		case EVENT_NAME.ON_CREATE:
			return {
				...state,
				users: state.users.concat(action.user)
				// user: {
				// 	username: '',
				// 	email: ''
				// }
			};
		case EVENT_NAME.ON_REMOVE:
			return {
				...state,
				users: state.users.filter(({id}) => id !== action.id)
			};
		case EVENT_NAME.ON_TOGGLE:
			return {
				...state,
				users: state.users.map((user) => user.id === action.id ? {...user, active: !user.active} : user)
			}
		default:
			return state;
	}
};

function App() {
	const [{username, email}, onChange, reset] = useInputs({
		username: '',
		email: ''
	});
	const [state, dispatch] = useReducer(reducer, initializeState);
	// const {users, user: {username, email}} = state;
	const {users} = state;
	const nextId = useRef(4);
	const count = useMemo(() => countActiveUsers(users), [users]);

	// const onChange = useCallback((e) => {
	// 	const {name, value} = e.target;
	// 	dispatch({
	// 		event: EVENT_NAME.ON_CHANGE,
	// 		name,
	// 		value
	// 	});
	// }, []);

	const onCreate = useCallback(() => {
		dispatch({
			event: EVENT_NAME.ON_CREATE,
			user: {
				id: nextId.current,
				username,
				email,
				active: false
			}
		});
		reset();
		nextId.current++;
	}, [username, email]);

	const onRemove = useCallback((id) => {
		dispatch({
			event: EVENT_NAME.ON_REMOVE,
			id
		});
	}, []);

	const onToggle = useCallback((id) => {
		dispatch({
			event: EVENT_NAME.ON_TOGGLE,
			id
		});
	}, []);

	return (
		<>
			<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
			<UserList users={users} onRemove={onRemove} onToggle={onToggle} />
			<div>활성화 된 사용자: {count}</div>
		</>
	);
}

export default App;

// useState
// function App() {
// 	const [users, setUsers] = useState([
// 		{
// 			id: 1,
// 			username: 'JYS',
// 			email: 'camp-son@naver.com',
// 			active: true
// 		},
// 		{
// 			id: 2,
// 			username: 'YJL',
// 			email: 'jyson@naver.com',
// 			active: false
// 		},
// 		{
// 			id: 3,
// 			username: 'JY',
// 			email: 'real-zero@naver.com',
// 			active: false
// 		}
// 	]);

// 	const count = useMemo(() => countActiveUsers(users), [users]);

// 	const nextId = useRef(4);

// 	const [user, setUser] = useState({
// 		username: '',
// 		email: ''
// 	});

// 	const {username, email} = user;

// 	const onCreate = useCallback(() => {
// 		const user = {
// 			id: nextId.current,
// 			username,
// 			email
// 		};

// 		setUsers(users => [...users, user]);

// 		setUser({
// 			username: '',
// 			email: ''
// 		})
// 		nextId.current++;
// 	}, [/* users,  */username, email]);

// 	const onRemove = useCallback((userId) => {
// 		setUsers(users => users.filter(({id}) => id !== userId));
// 	}, [/* users */]);

// 	const onToggle = useCallback((userId) => {
// 		setUsers(users => users.map((user) => (user.id === userId ? {...user, active: !user.active} : user)))
// 	}, [/* users */]);

// 	const onChange = useCallback((e) => {
// 		const {name, value} = e.target;

// 		setUser(prev => ({
// 			...prev,
// 			[name]: value
// 		}));
// 	}, [user]);

// 	return (
// 		<>
// 			<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
// 			<UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
// 			<div>활성화 된 사용자: {count}</div>
// 		</>
// 	);
// }

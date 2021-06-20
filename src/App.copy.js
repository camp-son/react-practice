import './App.css';
import React, {useMemo, useReducer} from 'react';
import UserList from './components/04.UserList';
import CreateUser from './components/05.CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
	console.log('활성 사용자 수 체킹');
	return users.filter(({active}) => active).length;
}

export const EVENT_NAME = {
	ON_CHANGE: 'ON_CHANGE',
	ON_CREATE: 'ON_CREATE',
	ON_TOGGLE: 'ON_TOGGLE',
	ON_REMOVE: 'ON_REMOVE'
};

const initializeState = {
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

const reducer = (state, action) => {
	switch(action.event) {
		case EVENT_NAME.ON_CREATE:
			return produce(state, ({users}) => {
				users.push(action.user);
			});
		case EVENT_NAME.ON_REMOVE:
			return produce(state, ({users}) => {
				const removeIdx = users.findIndex(({id}) => id === action.id);
				users.splice(removeIdx, 1);
			});
		case EVENT_NAME.ON_TOGGLE:
			return produce(state, ({users}) => {
				const user = users.find(({id}) => id === action.id);
				user.active = !user.active;
			});
		default:
			return state;
	}
};

export const UserDispatch = React.createContext(null);

function App() {
	const [state, dispatch] = useReducer(reducer, initializeState);
	const {users} = state;
	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<UserDispatch.Provider value={dispatch}>
			<CreateUser />
			<UserList users={users} />
			<div>활성화 된 사용자: {count}</div>
		</UserDispatch.Provider>
	);
}

export default App;

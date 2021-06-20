import React, {useContext} from 'react';
import {UserDispatch, EVENT_NAME} from '../App';

const User = React.memo(({user}) => {
	const dispatch = useContext(UserDispatch);

	return (
		<div>
			<b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={() => {dispatch({event: EVENT_NAME.ON_TOGGLE, id: user.id})}}>{user.username}</b> <span>{user.email}</span>
			<button onClick={() => {dispatch({event: EVENT_NAME.ON_REMOVE, id: user.id})}}>삭제</button>
		</div>
	);
});

function UserList({users}) {
	return (
		<div>
			{users.map(user => <User user={user} key={user.id}/>)}
		</div>
	);
}

export default React.memo(UserList);

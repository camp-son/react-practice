import React, {useEffect} from 'react';
function User({user, onRemove, onToggle}) {
	useEffect(() => {
		console.log('화면에 나타남');
		return () => {
			console.log('화면에 사라짐');
		};
	}, []);
	// useEffect(() => {
	// 	console.log('화면에 나타남', user);
	// 	return () => {
	// 		console.log('화면에 사라짐', user);
	// 	};
	// }, [user]);
	// useEffect(() => {
	// 	console.log('화면에 나타남', user);
	// 	return () => {
	// 		console.log('화면에 사라짐', user);
	// 	};
	// });
	return (
		<div>
			<b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={() => onToggle(user.id)}>{user.username}</b> <span>{user.email}</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

export default function UserList({users, onRemove, onToggle}) {
	return (
		<div>
			{users.map(user => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)}
		</div>
	);
}

function User({user}) {
	return (
		<div>
			<b>{user.username}</b> <span>{user.email}</span>
		</div>
	);
}

export default function UserList() {
	const users = [
		{
			id: 'camp-son',
			username: 'JYS',
			email: 'camp-son@naver.com'
		},
		{
			id: 'jyson',
			username: 'YJL',
			email: 'jyson@naver.com'
		},
		{
			id: 'real-zero',
			username: 'JY',
			email: 'real-zero@naver.com'
		}
	];

	return (
		<div>
			{users.map(user => <User user={user} key={user.id}/>)}
		</div>
	);
}

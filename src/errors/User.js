const User = ({user}) => {
	// if (!user) {
	// 	return null;
	// }

	return (
		<div>
			<div>
				<b>ID</b> {user.id}
			</div>
			<div>
				<b>User name</b> {user.username}
			</div>
		</div>
	)
};

export default User;


import React, { useRef, useContext, useCallback } from 'react';
import { EVENT_NAME, UserDispatch } from '../App';
import useInputs from '../hooks/useInputs';

function CreateUser() {
	const dispatch = useContext(UserDispatch);
	const [{username, email}, onChange, reset] = useInputs({
		username: '',
		email: ''
	});
	const nextId = useRef(4);

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

	return (
		<div>
			<input type="text" name="username" placeholder="계정명" value={username} onChange={onChange}/>
			<input type="text" name="email" placeholder="이메일" value={email} onChange={onChange}/>
			<button onClick={onCreate}>등록</button>
		</div>
	);
}

export default React.memo(CreateUser);

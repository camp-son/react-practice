import {useState} from 'react';
import {
    getUsers,
    useUsersDispatch,
    useUsersState,
} from '../../context/UsersContext';
import User from './User';

const Users = () => {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {loading, error, data: users} = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>에러 발생했습니다 !!</div>;
    }

    if (!users) {
        return <button onClick={fetchData}>Search</button>;
    }

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        style={{cursor: 'pointer'}}
                        onClick={() => setUserId(user.id)}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>Search</button>
            {userId && <User id={userId} />}
        </>
    );
};

export default Users;

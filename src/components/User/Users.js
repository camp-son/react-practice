import axios from 'axios';
import {useState} from 'react';
import {useAsync} from 'react-async';
// import useAsync from '../../hooks/useAsync';
import User from './User';

const getUsers = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
};

const Users = () => {
    const [userId, setUserId] = useState(null);
    const {
        isLoading,
        data: users,
        error,
        // reload,
        run: reload,
    } = useAsync({deferFn: getUsers});
    // } = useAsync({promiseFn: getUsers});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>에러 발생했습니다 !!</div>;
    }

    if (!users) {
        return <button onClick={reload}>Search</button>;
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
            <button onClick={reload}>Search</button>
            {userId && <User id={userId} />}
        </>
    );
};

export default Users;

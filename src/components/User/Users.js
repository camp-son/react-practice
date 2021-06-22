import axios from 'axios';
import {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );

            setUsers(response.data);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (err) {
        return <div>에러 발생했습니다 !!</div>;
    }

    if (!users) {
        return null;
    }

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>Search</button>
        </>
    );
};

export default Users;

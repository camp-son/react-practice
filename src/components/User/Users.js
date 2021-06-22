import axios from 'axios';
import {useEffect, useReducer} from 'react';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                users: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                users: action.users,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                users: null,
                error: action.error,
            };
        default:
            throw new Error(`Not support action type :: ${action.type}`);
    }
};

const Users = () => {
    const [state, dispatch] = useReducer(userReducer, {
        loading: false,
        users: null,
        error: null,
    });

    const fetchUsers = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );

            dispatch({type: 'SUCCESS', users: response.data});
        } catch (error) {
            dispatch({type: 'ERROR', error});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const {loading, users, error} = state;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
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

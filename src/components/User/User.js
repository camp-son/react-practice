import axios from 'axios';
import {useAsync} from 'react-async';
// import useAsync from '../../hooks/useAsync';

const getUser = async ({id}) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
};

const User = ({id}) => {
    const {
        isLoading,
        data: user,
        error,
    } = useAsync({promiseFn: getUser, id, watch: id});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다.</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email :</b> {user.email}
            </p>
        </div>
    );
};

export default User;

import {createContext, useContext, useReducer} from 'react';
import createAsyncDispatcher, {
    createAsyncHandler,
    initialAsyncState,
} from '../apis/utils/asyncActionUtils';
import * as api from '../apis/apis';

const initialState = {
    users: initialAsyncState,
    user: initialAsyncState,
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Not support action type :: ${action.type}`);
    }
};

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const UsersProvider = ({children}) => {
    const [state, dispatch] = useReducer(usersReducer, initialState);

    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
};

export const useUsersState = () => {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Connot find UsersProvider');
    }
    return state;
};

export const useUsersDispatch = () => {
    const state = useContext(UsersDispatchContext);
    if (!state) {
        throw new Error('Connot find UsersProvider');
    }
    return state;
};

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);

export const getUser = createAsyncDispatcher('GET_USER', api.getUser);

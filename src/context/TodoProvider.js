import {createContext, useContext, useReducer, useRef} from 'react';

export const TODO_EVENT_NAME = {
    ON_CREATE: 'create',
    ON_REMOVE: 'remove',
    ON_TOGGLE: 'toggle',
};

const intializeTodos = [
    {
        id: 1,
        text: '운동하기',
        done: true,
    },
    {
        id: 2,
        text: '리액트 훅 공부하기',
        done: true,
    },
    {
        id: 3,
        text: '스타일 컴포넌트 공부하기',
        done: false,
    },
    {
        id: 4,
        text: '리덕스 공부하기',
        done: false,
    },
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_EVENT_NAME.ON_CREATE:
            return state.concat(action.todo);
        case TODO_EVENT_NAME.ON_REMOVE:
            return state.filter(({id}) => id !== action.id);
        case TODO_EVENT_NAME.ON_TOGGLE:
            return state.map((todo) =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        default:
            throw new Error(`Not support actioin type :: [${action.type}]`);
    }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, intializeTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
};

export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
};

export const useTodoNextId = () => {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
};

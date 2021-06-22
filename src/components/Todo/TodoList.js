import styled from 'styled-components';
import {useTodoState} from '../../context/TodoProvider';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map((todo) => (
                <TodoItem
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    key={todo.id}
                />
            ))}
        </TodoListBlock>
    );
};

export default TodoList;

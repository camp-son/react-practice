import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListBlock>
            <TodoItem text="운동하기" done={true} />
            <TodoItem text="리액트 훅 공부하기" done={true} />
            <TodoItem text="스타일 컴포넌트 공부하기" done={false} />
            <TodoItem text="리덕스 공부하기" done={false} />
        </TodoListBlock>
    );
};

export default TodoList;

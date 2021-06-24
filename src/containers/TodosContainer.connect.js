import {useCallback} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addTodo, toggleTodo} from '../modules/todos';
import Todos from '../components/TodoPresentation/Todos';

const TodosContainer = ({todos, onCreate, onToggle}) => {
    // const todos = useSelector((state) => state.todos);
    // const dispatch = useDispatch();

    // const onCreate = (text) => dispatch(addTodo(text));
    // const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default connect((state) => ({todos: state.todos}), {
    onCreate: addTodo,
    onToggle: toggleTodo,
})(TodosContainer);

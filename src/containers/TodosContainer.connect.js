import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../modules/todos';
import Todos from '../components/TodoPresentation/Todos';

const TodosContainer = ({todos, onCreate, onToggle}) => {
    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default connect((state) => ({todos: state.todos}), {
    onCreate: addTodo,
    onToggle: toggleTodo,
})(TodosContainer);

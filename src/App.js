import './App.scss';
import CounterContainer from './containers/CounterContainer.connect';
import TodosContainer from './containers/TodosContainer';

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
}

export default App;

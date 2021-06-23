import './App.scss';
import Users from './components/User/Users';
import {UsersProvider} from './context/UsersContext';

function App() {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}

export default App;

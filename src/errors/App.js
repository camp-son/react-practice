import ErrorBoundary from './ErrorBoundary';
import User from './User';
const App = () => {
    const user = {
        id: 1,
        username: 'camp-son',
    };

    return (
        <ErrorBoundary>
            <User />
        </ErrorBoundary>
    );
};

export default App;

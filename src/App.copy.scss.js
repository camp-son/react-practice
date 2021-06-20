import './App.scss';
import React, {useState} from 'react';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';

function App() {
    const [check, setCheck] = useState(false);
    const onChange = (e) => {
        setCheck(e.target.checked);
    };

    return (
        <div className="App">
            <Checkbox checked={check} onChange={onChange}>
                다음 약관에 모두 동의
            </Checkbox>
            <p>
                <b>check: </b>
                {check ? 'true' : 'false'}
            </p>
            <div className="buttons">
                <Button size="large" onClick={() => console.log('On click !!')}>
                    BUTTON
                </Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray">
                    BUTTON
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button size="small" color="gray">
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="pink">
                    BUTTON
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button size="small" color="pink">
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" outline>
                    BUTTON
                </Button>
                <Button color="gray" outline>
                    BUTTON
                </Button>
                <Button size="small" color="pink" outline>
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" fullWidth>
                    BUTTON
                </Button>
                <Button size="large" color="gray" fullWidth>
                    BUTTON
                </Button>
                <Button size="large" color="pink" fullWidth>
                    BUTTON
                </Button>
            </div>
        </div>
    );
}

export default App;

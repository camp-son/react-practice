import './App.scss';
import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import Button from './components/StyledButton/StyledButton';

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || 'black'};
    border-radius: 50%;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `}
`;

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

function App() {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595',
                },
            }}
        >
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button>BUTTON</Button>
                    <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" color="gray">
                        BUTTON
                    </Button>
                    <Button color="gray">BUTTON</Button>
                    <Button size="small" color="gray">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" color="pink">
                        BUTTON
                    </Button>
                    <Button color="pink">BUTTON</Button>
                    <Button size="small" color="pink">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button outline>BUTTON</Button>
                    <Button color="gray" outline>
                        BUTTON
                    </Button>
                    <Button color="pink" outline>
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" fullWidth>
                        BUTTON
                    </Button>
                    <Button size="large" color="gray" fullWidth>
                        BUTTON
                    </Button>
                    <Button size="large" color="pink" fullWidth>
                        BUTTON
                    </Button>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
}

export default App;

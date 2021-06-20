import './App.scss';
import React, {useState} from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import Button from './components/StyledButton/StyledButton';
import Dialog from './components/Dialog/Dialog';

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
    const [dialog, setDialog] = useState(false);

    const onClick = () => {
        setDialog(true);
    };

    const onConfirm = () => {
        console.log('확인');
        setDialog(false);
    };

    const onCancel = () => {
        console.log('취소');
        setDialog(false);
    };

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
                    <Button
                        size="large"
                        color="pink"
                        fullWidth
                        onClick={onClick}
                    >
                        삭제하기
                    </Button>
                </ButtonGroup>
            </AppBlock>
            <Dialog
                title="정말 삭제하시겠습니까?"
                confirmText="삭제"
                cancelText="취소"
                onConfirm={onConfirm}
                onCancel={onCancel}
                visible={dialog}
            >
                데이터를 정말로 삭제하시겠습니까?
            </Dialog>
        </ThemeProvider>
    );
}

export default App;

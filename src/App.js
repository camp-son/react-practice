import './App.scss';
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>Hello world</TodoTemplate>
        </>
    );
}

export default App;

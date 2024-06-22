// src/App.js
import React from 'react';
import UserForm from './components/userForm';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <h1>Birthday Reminder App</h1>
            <UserForm />
        </div>
    );
};

export default App;

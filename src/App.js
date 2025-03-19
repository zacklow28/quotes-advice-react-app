import React from 'react';
import './App.css';
import { Quotes, Advice } from "./components";

const App = () => {
    return (
        <div className="app">
            <Quotes />
            <Advice />
        </div>
    );
};

export default App;

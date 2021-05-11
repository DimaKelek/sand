import React from 'react';
import './App.css';
import {ReactCheckbox} from "./Components/Checkbox/ReactCheckbox";
import {Stand} from "./Components/Stand";
import {MyButton} from "./Components/MyButton/MyButton";

function App() {

    return (
        <div className="App">
            <Stand title="Checkbox">
                <ReactCheckbox>Unchecked</ReactCheckbox>
                <ReactCheckbox checked={true}>Checked</ReactCheckbox>
                <ReactCheckbox disabled={true}>Unchecked + Disabled</ReactCheckbox>
                <ReactCheckbox checked={true} disabled={true}>Checked + Disabled</ReactCheckbox>
            </Stand>
            <Stand title="Button">
                <MyButton>Click 1</MyButton>
                <MyButton disabled>Click 2</MyButton>
            </Stand>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {NeonCheckbox} from "./Components/Checkbox/NeonCheckbox";
import {Stand} from "./Components/Stand";

function App() {

    return (
        <div className="App">
            <Stand title="Checkbox">
                <NeonCheckbox>Unchecked</NeonCheckbox>
                <NeonCheckbox checked={true}>Checked</NeonCheckbox>
                <NeonCheckbox disabled={true}>Unchecked + Disabled</NeonCheckbox>
                <NeonCheckbox checked={true} disabled={true}>Checked + Disabled</NeonCheckbox>
            </Stand>
        </div>
    );
}

export default App;

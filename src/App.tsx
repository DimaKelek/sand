import React from 'react';
import './App.css';
import {NeonCheckbox} from "./Components/Checkbox/NeonCheckbox";

function App() {

    return (
        <div className="App">
            <div className="NeonCheckbox">
                <div className="title">Checkbox</div>

                <NeonCheckbox>Unchecked</NeonCheckbox>
                <NeonCheckbox>Checked</NeonCheckbox>
                <NeonCheckbox disabled={true}>Unchecked + Disabled</NeonCheckbox>
                <NeonCheckbox checked={true} disabled={true}>Checked + Disabled</NeonCheckbox>
            </div>
        </div>
    );
}

export default App;

import React, { useState } from "react";

import "../css/Container.css"
import Counter from "./Counter";
import ChangeColor from "./ChangeColor";
import ToDoList from "./ToDoList";


function Container() {

    const [chosenComponent, setChosenComponent] = useState('ex01')

    function showComponent(component) {
        setChosenComponent(component)
    }

    return (
        <div id="container">
            <nav id="containerNav">
                <button onClick={() => showComponent('ex01')}>Exercício 01</button>
                <button onClick={() => showComponent('ex02')}>Exercício 02</button>
                <button onClick={() => showComponent('ex03')}>Exercício 03</button>


            </nav>

            <div id="chosenComponent">
                {chosenComponent === 'ex01' && <Counter />}
                {chosenComponent === 'ex02' && <ChangeColor />}
                {chosenComponent === 'ex03' && <ToDoList />}
            </div>
        </div>
    )
}

export default Container
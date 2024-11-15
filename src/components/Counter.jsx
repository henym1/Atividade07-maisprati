import React from "react";
import { useState } from "react";
import "../css/Counter.css"


// Exercício 1 - contador simples

function Counter() {

    const[count, setCount] = useState(0)

    function increaseCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <>
            <section id="ex01">
                <p>Contagem: {count}</p>
                <button id="increaseButton" onClick={increaseCount}>Gol do Grêmio</button>
                <button id="decreaseButton" onClick={decreaseCount}>Anular gol</button>
            </section>
        </>
    )
}

export default Counter
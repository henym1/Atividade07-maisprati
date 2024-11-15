import React, { useState } from "react";

import "../css/ChangeColor.css"

// Exercício 2 - Alteração de cor de fundo

function ChangeColor() {
    
    function randomBgColor() {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = color;
    }

    return(
        <>
            <section id="ex02">
                <p>Clique para alterar a cor</p>
                <button id="changeBgColorButton" onClick={randomBgColor}>Mudar cor</button>
            </section>
        </>
    )
}

export default ChangeColor
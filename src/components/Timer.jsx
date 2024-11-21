import React, { useState, useEffect } from "react"

import "../css/Timer.css"

// Exercício 9 - Timer com Intervalo e Alerta

// Pendente: Fazer com que o botão de "Iniciar" fique visível apenas na primeira execução e quando a contagem for reiniciada, 
// tendo em vista que ele não tem utilidade quando a contagem está apenas pausada.

function Timer() {

    const [time, setTime] = useState(10)

    const [isRunning, setIsRunning] = useState(false)

    const [initialTime, setInitialTime] = useState(10)


    useEffect(() => {
        let timer

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000)
        } else if (time === 0 && isRunning) {
            alert('Fim da contagem!')
            setIsRunning(false)
        }

        return () => clearInterval(timer)
    }, [isRunning, time])


    function startTimer() {
        if (initialTime > 0) {
            setTime(initialTime)
            setIsRunning(true)
            setInitialTime('')
        }
    }

    function pauseTimer() {
        setIsRunning(false)
    }

    function resumeTimer() {
        setIsRunning(true)
    }

    function resetTimer() {
        setIsRunning(false)
        setTime(10)
        setInitialTime(10)
    }

    function handleInputChange(event) {
        const inputTime = Number(event.target.value)
        setInitialTime(inputTime)
        setTime(inputTime)
    }

    return (
        <>
            <section id='ex09'>
                <h1>Timer</h1>
                <div>
                    <input
                        type="number"
                        value={initialTime}
                        onChange={handleInputChange}
                        placeholder="Digite os segundos"
                        min="0"
                    />
                    <span> segundos</span>
                </div>

                <div>
                    <h2>{time} segundos restantes</h2>
                </div>

                <div>
                    {!isRunning && time !== 0 && (
                        <button onClick={startTimer}>Iniciar</button>
                    )}

                    {isRunning && (
                        <button onClick={pauseTimer}>Pausar</button>
                    )}

                    {!isRunning && time !== 0 && (
                        <button onClick={resumeTimer}>Retomar</button>
                    )}

                    <button onClick={resetTimer} disabled={time === 0}>Reiniciar</button>
                </div>
            </section>
        </>
    )
}

export default Timer

import React, { useState, useEffect } from 'react';
import "../css/Stopwatch.css"

// Exercício 4 - Temporizador com useEffect

const Stopwatch = () => {

    const [seconds, setSeconds] = useState(0)

    const [isRunning, setIsRunning] = useState(false)

    const [intervalId, setIntervalId] = useState(null)

    function startStopwatch() {
        setIsRunning(true)
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
        setIntervalId(id)
    }

    function pauseStopwatch() {
        setIsRunning(false)
        clearInterval(intervalId)
    }

    function resetStopwatch() {
        setSeconds(0)
        if (isRunning) {
            clearInterval(intervalId)
            startStopwatch()
        }
    }

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [intervalId])

    return (
        <>
            <section id="ex04">
                <p>Cronômetro: {seconds} segundos</p>
                <div id="stopwatchBtns">
                    {!isRunning ? (
                        <button onClick={startStopwatch}>Começar</button>
                    ) : (
                        <button onClick={pauseStopwatch}>Pausar</button>
                    )}
                    <button onClick={resetStopwatch}>Reiniciar</button>
                </div>
            </section>
        </>
    );
};

export default Stopwatch;

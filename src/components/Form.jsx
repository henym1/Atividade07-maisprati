import React, { useState } from "react";

import "../css/Form.css"

// Exercício 6 - Formulário de Registro Simples

function WelcomeMessage({ name }) {
    return (
        <>
            <p>Bem vindo, {name}!</p>
        </>
    )
}

function Form() {

    // Estados para armazenar os valores dos campos
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const [formSubmitted, setFormSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        if (!name || !email || !password) {
            setMessage('Por favor, preencha todos os campos')
            return
        }

        setMessage('')
        setFormSubmitted(true)
    }


    return (
        <>
            <section id="ex06">
                <p>Formulário de registro</p>
                {!formSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nome:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Senha:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {message && <p style={{ color: 'red' }}>{message}</p>}
                        <button type="submit">Enviar</button>
                    </form>
                ) : (
                    <WelcomeMessage name={name} />
                )}
            </section>
        </>
    )
}

export default Form
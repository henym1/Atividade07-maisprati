import React, { useState, useEffect } from "react";

import "../css/Request.css"

// Exercício 7 - Aplicação de Requisição de Dados Simples

function Request() {

    const [posts, setPosts] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState(null)

    async function fetchPosts() {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            if (!response.ok) {
                throw new Error('Erro ao carregar posts')
            }
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <section id="ex07">
                <h1>Lista de Posts</h1>

                {isLoading && <p>Carregando...</p>}

                {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
                
                <div>
                    <button onClick={fetchPosts} disabled={isLoading}>
                        {isLoading ? 'Recarregando...' : 'Recarregar Posts'}
                    </button>
                </div>
            </section>
        </>
    )

}

export default Request
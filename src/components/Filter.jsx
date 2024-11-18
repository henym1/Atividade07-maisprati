import React, { useState } from "react";

import "../css/Filter.css"

// Exercício 5 - Filtro de Lista

function Filter() {

    const [characters] = useState([
        'Ahri',
        'Akali',
        'Alistar',
        'Ezreal',
        'Jinx',
        'Lee Sin',
        'Lux',
        'Miss Fortune',
        'Riven',
        'Teemo',
    ])

    // Estado para armazenar o valor do filtro
    const [filter, setFilter] = useState('')

    // Função para lidar com a mudança no campo de filtro
    function handleFilterChange(event) {
        setFilter(event.target.value)
    }

    // Filtra os nomes dos personagens com base no texto digitado (ignorando maiúsculas/minúsculas)
    const filteredCharacters = characters.filter(function (character) {
        return character.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section id="ex05">
                <p>Filtro de lista</p>
                <input
                    type="text"
                    placeholder="Busque o nome desejado"
                    value={filter}
                    onChange={handleFilterChange}
                />
                <ul>
                    {filteredCharacters.length > 0 ? (
                        filteredCharacters.map(function (character, index) {
                            return <li key={index}>{character}</li>
                        })
                    ) : (
                        <li>Nenhum nome encontrado</li>
                    )}
                </ul>
            </section>
        </>
    )
}

export default Filter
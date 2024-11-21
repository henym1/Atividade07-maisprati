import React, { useState } from "react"

import "../css/Tabs.css"

function Tabs() {

    const [activeTab, setActiveTab] = useState('sobre')

    function handleTabClick(tab) {
        setActiveTab(tab)
    }

    return (
        <>
            <section id="ex10">

                <div id="tabsContainer">
                    <button
                        onClick={() => handleTabClick('sobre')}
                        className={`tab ${activeTab === 'sobre' ? 'active' : ''}`}
                    >
                        Sobre
                    </button>
                    <button
                        onClick={() => handleTabClick('contato')}
                        className={`tab ${activeTab === 'contato' ? 'active' : ''}`}
                    >
                        Contato
                    </button>
                </div>

                <div id="activeTab">
                    {activeTab === 'sobre' && (
                        <div>
                            <h2>Sobre</h2>
                            <p>Este é o último exercício da Atividade 07. Obrigado por conferir tudo até aqui!</p>
                        </div>
                    )}
                    {activeTab === 'contato' && (
                        <div>
                            <h2>Contato</h2>
                            <p>Se você deseja entrar em contato, envie uma mensagem para HenryA.dev@gmail.com</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Tabs

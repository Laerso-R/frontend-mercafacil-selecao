import React from 'react'
import './layout/Header.css'

function Header () {

return (
    <header className="Header">
        <h2>Rick and Morty</h2>
        
        <div>
            <input type="text" placeholder="Pesquisar Personagem"/>
            <button type="submit">Pesquisar</button>
        </div>
        <div>
            <input type="text" placeholder="Pesquisar Episódio"/>
            <button type="submit">Pesquisar</button>
        </div>
            
    </header>
)}

export default Header